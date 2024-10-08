import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Thank you for visiting our site! We're committed to providing you with exceptional service and valuable information. For any inquiries or support, please don't hesitate to contact us. Stay updated with the latest news, offers, and updates by following us on social media. Your feedback is important to us, and we look forward to continuing to serve you. Have a great day!
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+ 122323434</li>
                <li>contact@foreever.com</li>
            </ul>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2024@ forever.com - All Right Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
