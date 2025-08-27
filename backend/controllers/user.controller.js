import userModel from "../models/user.model.js";
import validator from 'validator';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mailSender from '../utils/mailSender.js'
import otpModel from "../models/otp.model.js";
import otpTemplate from "../mail/emailVerificationTemplate.js";
const createToken = (id) => {

    return jwt.sign({ id },process.env.JWT_SECRET)
}

//   Route for user login
const loginUser = async (req,res) => {
      
     try {
         const { email, password } = req.body;

         const user = await userModel.findOne({ email })

         if (!user) {
              return res.json({success:false, message:"User doesn't exists"})
         }

         const isMatch = await bcrypt.compare(password, user.password)
         
         if (isMatch) {
             const token = createToken(user._id)
             res.json({success:true,token})
         }
         else {
             return res.json({ success:false,message:"Invalid credentials"})
         }

     } catch (error) {
         console.log(error);
         res.json({ success: false, message:error.message})
     }
}

///

const signUPverify = async (req, res) => {
         try {
             
             const { name, email, password, otp } = req.body;

             const otpRecord = await otpModel.findOne({ email }).sort({ createdAt: -1 });
       
          if ( String(otp) !== String(otpRecord.otp)) {
              return res.json({ message: "Incorrect OTP", success: false });
             }
             
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
          
        const newUser = new userModel({
            name,
            email,
            password : hashPassword
        })
        
        const user = await newUser.save()

        const token = createToken(user._id);

        res.json({ success:true,token})
             
         } catch (error) {
             console.log(error);
             res.json({ success: false, message:error.message})
         }

}
// Route for user Register
const registerUser = async (req,res) => {
     
    try {
          
          const { email,name, password } = req.body;
          
          // checking user already exists or not 
          const exists = await userModel.findOne({ email })
          if (exists) {
                 return res.json({message:"User already exists",success:false})
          }

          // validating email formate and strong password
          if (!validator.isEmail(email)) {
               return res.json({success:false, message:"Please enter a valid email"})
          }
          if (password.length < 8) {
              return res.json({ success:false, message:"Please enter a strong password"})
          }
          
        const otp = generateNumericOTP(6);
        
        const newOtp = new otpModel({
            email,
            otp
        });

        newOtp.save();

        const mailres = await mailSender(email, 'OTP', otpTemplate(otp));
       
        return res.json({ message: "Enter the verification code sent to your email", success: true }); 
          // hashing user password
          
        
        
        // modified from here 
        //   const salt = await bcrypt.genSalt(10)
        //   const hashPassword = await bcrypt.hash(password, salt)
          
        // const newUser = new userModel({
        //     name,
        //     email,
        //     password:hashPassword
        // })
        
        // const user = await newUser.save()

        // const token = createToken(user._id);

        // res.json({ success:true,token})

      } catch (error) {
        console.log(error);
        res.json({ success: false, message:error.message})
      }
}


// Route for admin login
const adminLogin = async (req, res) => {
     
      try {
          const { email, password } = req.body
          if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
              const token = jwt.sign(email + password, process.env.JWT_SECRET)
              res.json({ success:true,token})
          }

          else {
                 res.json({success:false,message:"Invalid credentials"})
          }
      } catch (error) {
           console.log(error);
           res.json({ success: false, message:error.message})
      }
}


//Route for forgotPassword
const forgotPassword = async (req, res) => {
    
    try {
        const { email } = req.body;
        
        console.log(email);
        // validating email format
              if (!validator.isEmail(email)) {
                   return res.json({success:false, message:"Please enter a valid email"})
        }
        
        // checking user already exists or not
              const exists = await userModel.findOne({ email })
              if (!exists) {
                     return res.json({message:"User not exits",success:false})
        }
        
        const otp = generateNumericOTP(6);
        
        const newOtp = new otpModel({
            email,
            otp
        })
    
        newOtp.save();
        
        const mailres = await mailSender(email, 'OTP', otpTemplate(otp))
        //console.log(mailres);
    
        return res.json({message:"Enter the verification code sent to your email" , success:true})
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
    
}


//Route for verifyOtp
const verifyOtp = async (req, res) => {
   try {
     
     const { email, otp } = req.body;
     const otpRecord = await otpModel.findOne({ email }).sort({ createdAt: -1});
    
     
       
     if ( String(otp) !== String(otpRecord.otp)) {
         return res.json({ message: "Incorrect OTP", success: false });
     }
 
     return res.json({message:"OTP verified successfully",success:true})
   } catch (error) {
            res.json({message:"verify otp catch", success:false})
   }

}


//Route for updatePassword
const resetPassword = async (req, res) => {

   try {
     const { newPassword, email } = req.body;
     
     const user = await userModel.findOne({ email });
 
     const hashedPassword = await bcrypt.hash(newPassword, 10);
 
     user.password = hashedPassword;
     await user.save();
 
     return res.json({success:true,message:"Password reset successful"})
   } catch (error) {
       return res.json({ success: false, message: "Error in password reset" });
   }
}


function generateNumericOTP(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

export {loginUser,registerUser,adminLogin,forgotPassword,verifyOtp,resetPassword,signUPverify}