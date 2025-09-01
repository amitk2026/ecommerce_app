import React, { useContext,useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const NewsLetterBox = () => {

  const [email, setEmail] = useState('')


  const { token,backendUrl } = useContext(ShopContext)

    const onSubmitHandler = async(event) => {
      event.preventDefault();

     try {
           const response = await axios.post(backendUrl + '/api/user/coupon', { email }, { headers: { token } })
          if (!response.data.success) {
             toast.error(response.data.message)
       }
      setEmail('')
       if (response.data.success) {
         
               toast.success("Coupon delivered to inbox")
      }
      
     } catch(error) {
           toast.error(error.message)
     }
      
      
    }
  return (
    <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
          <p className='text-gray-400 mt-3'>
                Join the SmartCart community and enjoy 20% off your first order! Stay updated with the
                latest deals, new arrivals, and exclusive offers—delivered straight to your inbox. Subscribe now and save!
          </p>
          <form  onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
              <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}
                   value={email}
                  className='w-full sm:flex-1 outline-none ' required />
              <button  type='submit' className='bg-blue-600 hover:bg-blue-800 transition-colors duration-500 text-white
                text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
          </form>
    </div>
  )
}

export default NewsLetterBox
