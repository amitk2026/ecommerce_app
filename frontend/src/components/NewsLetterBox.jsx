import React from 'react'

const NewsLetterBox = () => {


    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
          <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
          <p className='text-gray-400 mt-3'>
                Join the SmartCart community and enjoy 20% off your first order! Stay updated with the
                latest deals, new arrivals, and exclusive offers—delivered straight to your inbox. Subscribe now and save!
          </p>
          <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
              <input type="email" placeholder='Enter your email'
                  className='w-full sm:flex-1 outline-none ' required />
              <button type='submit' className='bg-blue-600 hover:bg-blue-800 transition-colors duration-500 text-white
                text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
          </form>
    </div>
  )
}

export default NewsLetterBox
