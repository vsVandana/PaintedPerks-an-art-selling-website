import React from 'react'
import logo from '../utils/images/logoedit.jpg'
const Footer = () => {
  return (
    <div className='p-16 bg-[#fcdee5]'>
      <div className='flex justify-evenly'>
        <div>
          <h1 className='text-2xl  font-extrabold'>Customer Service</h1>
          <ul className='text-xl text-gray-700 my-6'>
            <li className='my-1'>Contact Us</li>
            <li className='my-3'>Shipping & Delivery</li>
            <li className='my-3'>Returns</li>
            <li className='my-3'>Low Price Guarantee</li>
            <li className='my-3'>FAQs</li>
          </ul>
        </div>
        <div>
        <h1 className='text-2xl  font-extrabold'>Shop</h1>
          <ul className='text-xl text-gray-700 my-6'>
            <li className='my-1'>Art Prints</li>
            <li className='my-3'>Canvas Prints</li>
            <li className='my-3'>iPhone Cases</li>
            <li className='my-3'>Tapestries</li>
            <li className='my-3'>Comforters</li>
          </ul>
        </div>
        <div>
        <h1 className='text-2xl  font-extrabold'>About Us</h1>
          <ul className='text-xl text-gray-700 my-6'>
            <li className='my-1'>About Us</li>
            <li className='my-3'>Newsletter</li>
            <li className='my-3'>Careers</li>
            <li className='my-3'>Refer a Friend</li>
            <li className='my-3'>Student Discount</li>
          </ul>
        </div>
        
      </div>
      <hr/>
      <div className='flex items-center justify-between my-4'>
        <div className='text-2xl font-extrabold text-[#285380]'>PaintedPerks</div>
        <div className='text-md'>copyright &copy;2023 <span className='text-[#E7A0AE]'>PaintedPerks</span>.All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer