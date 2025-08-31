import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
          <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10
           mt-40 text-sm '>
              <div>
                  <img src={assets.logoexp5} className='mb-5 w-32 h-6' alt="" />
                  <p className='w-full md:w-2/3 text-gray-600'>
                      Your one-stop destination for smarter shopping. At SmartCart, we bring you
                      the best deals, top brands, and a seamless shopping experience—all in one place.
                      Discover convenience, speed, and reliability every time you shop with us. Because smart choices start here.
                  </p>
              </div>
              
              <div >
                  <p className='text-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                       <li>Home</li>
                       <li>About us</li>
                       <li>Delivery</li>
                       <li>Privacy policy</li>
                  </ul>
              </div>

              <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>+91-854-296-1699</li>
                      <li>help@smartcart.demo</li>
                  </ul>
              </div>
          </div>

          <div>
              <hr />
              <p className='py-5 text-sm text-center'>
                  Copyright 2025@ smartcart.com -All Right Reserved
              </p>
          </div>
    </div>
  )
}

export default Footer
