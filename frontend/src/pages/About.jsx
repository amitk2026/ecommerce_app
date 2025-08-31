import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>SmartCart is a modern e-commerce platform designed to make shopping simple, fast,
            and enjoyable. Our mission is to connect people with the products they love through
            a seamless and secure digital experience. From trending fashion to everyday essentials,
            SmartCart offers a wide range of quality items at competitive prices. With an easy-to-use
            interface,
            smart search, and secure payment options, we ensure a hassle-free shopping journey. At SmartCart,
            customer satisfaction comes first, and we’re committed to innovation, reliability, and trust. Shop
            smarter, live better — that’s the SmartCart promise. </p>
          <p>Ever since SmartCart was established, our mission has been to provide a seamless shopping
            experience backed by variety, quality, and innovation.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At SmartCart, our mission is to redefine online shopping by combining convenience, trust,
            and innovation. We aim to create a platform where customers can explore a wide range of
            quality products, enjoy a seamless shopping journey, and experience reliable service at every
            step. Guided by a customer-first approach, we are committed to making shopping smarter, faster,
            and more accessible, while continually improving to meet the evolving needs of our user</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At SmartCart, we prioritize quality in every product we offer.
            Partnering with trusted vendors, we ensure authenticity, durability, and value. Each item is
            carefully selected and monitored through customer feedback, guaranteeing a reliable shopping
            experience built on trust, consistency, and excellence. </p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>SmartCart is designed to make shopping effortless and
            accessible anytime, anywhere. With an easy-to-use interface, secure checkout, and fast
            delivery options, we ensure a smooth experience from browsing to purchase. Our goal is
            to save you time and effort while providing everything you need in one place.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At SmartCart, we believe great service is as important as
            great products. Our dedicated support team is always ready to assist, ensuring quick resolutions
            and personalized help. We value every customer interaction, striving to deliver a seamless, friendly,
            and reliable experience that builds lasting trust and satisfaction </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
