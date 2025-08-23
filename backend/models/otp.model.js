

import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js"
import otpTemplate from "../mail/emailVerificationTemplate.js"

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  otp: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 5 * 60, // OTP expires after 5 minutes
  },
});

// a function to send email
// async function sendVerificationEmail(email, otp) {
//   try {
//     const mailResponse = await mailSender(
//       email,
//       "OTP Verification",
//       otpTemplate(otp)
//     );
//     console.log("Email sent successfully: ", mailResponse);
//   } catch (error) {
//     console.log("Error sending verification email: ", error);
//     throw error;
//   }
// }

// OTPSchema.pre("save", async function (next) {
//   if (this.isNew) {
//     try {
//       await sendVerificationEmail(this.email, this.otp);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     next();
//   }
// });


const otpModel = mongoose.model('OTP', OTPSchema);
export default otpModel;



// This model is used to store OTPs for email verification or password reset.
// The OTPs are set to expire after 5 minutes.
