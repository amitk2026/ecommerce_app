import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import { toast} from 'react-toastify';

const Login = () => {
  
  

  const [currentState, setCurrentState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState(''); 
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
  


  

  const onSubmitHandler = async (e) => {
    e.preventDefault();

      try {
        if (currentState === 'Sign Up' && !otpSent) {
     
          const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })

          if (response.data.success) {
             
            setOtpSent(true);
            //setToken(response.data.token)
            //localStorage.setItem('token', response.data.token)
            
          }
          else {
              toast.error(response.data.message)
          }
          
        }
        else if ( currentState === 'Sign Up' && otpSent) {
          
         try {
           const response = await axios.post(backendUrl + '/api/user/verifyReg', { name, email, password, otp });
 
           if (response.data.success) {
             setToken(response.data.token);
             localStorage.setItem('token', response.data.token);
             setOtp(false);
             setName('');
             setPassword('');
             setEmail('');
             setOtp('');
           }
         } catch (error) {
           toast.error(response.data.message);
         }
        }
        
        else {
             
          const response = await axios.post(backendUrl + '/api/user/login', { email, password })

          if (response.data.success) {
             setToken(response.data.token)
             localStorage.setItem('token',response.data.token)
          }
          else {
                  toast.error(response.data.message)
          }
        }
        
        
      } catch (error) {
          console.log(error)
          toast.error(error.message)
      }
  }

  useEffect(() => {
    if (token) {
             navigate('/')
          }
  },[token])

  // return (
  //   <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
  //     <div className='inline-flex items-center gap-2 mb-2 mt-10'>
  //       <p className='prata-regular text-3xl'>{currentState}</p>
  //       <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
  //     </div>
      
     
  //    { currentState === 'Login' ? '':  <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      
  //     <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
  //     <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
  //     <div className='w-full flex justify-between text-sm mt-[-8px]'>
  //       <p onClick={()=> navigate('/forget-password')} className='cursor-pointer text-blue-800'>Forgot password?</p>
  //       {
  //         currentState === 'Login' ? 
  //           <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> :
  //           <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
  //       }
  //     </div>

  //     <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign IN' : 'Sign Up'}</button>
  
  //   </form>
  // )
  
  
  return (
  <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
    
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
    </div>

    {/* Name input for signup only and before OTP */}
    {currentState === 'Sign Up' && !otpSent && (
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Name'
        required
      />
    )}

    {/* Email input only if not OTP step */}
    {(!otpSent || currentState === 'Login') && (
      <input
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />
    )}

    {/* Password input only before OTP */}
    {(!otpSent || currentState === 'Login') && (
      <input
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />
    )}

    {/* OTP input for signup after OTP is sent */}
    {otpSent && (
      <input
        onChange={(e)=>setOtp(e.target.value)}
        value={otp}
        type="text"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Enter OTP'
        required
      />
    )}

    <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {currentState === 'Login' ? <p onClick={() => navigate('/forget-password')} className='cursor-pointer text-blue-800'>Forgot password?</p> : ' '}
      {
        currentState === 'Login' ? 
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> :
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
      }
    </div>

    <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>
      {currentState === 'Login' ? 'Sign IN' : otpSent ? 'Verify OTP' : 'Sign Up'}
    </button>

  </form>
);

}

export default Login
