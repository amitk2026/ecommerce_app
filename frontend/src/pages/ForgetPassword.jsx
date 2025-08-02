import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
const ForgetPassword = () => {
    
    const { navigate } = useContext(ShopContext)
    return (
      
        <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>

            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>Reset password</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />    
            </div>
            
            <div className='flex flex-col gap-2 w-full'>
                <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Enter new Password' />
                <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Confirm password' /> 
            </div>
            <p onClick={()=>navigate('/login')} className='w-full flex justify-between text-sm mt-[-8px] cursor-pointer'>Login</p>
            
      </form>
  )
}

export default ForgetPassword
