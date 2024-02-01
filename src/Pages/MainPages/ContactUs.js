import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <div className='m-10'>
      
      <div className='flex flex-col  justify-center'>
        <h1 className='text-4xl font-bold text-center'>Send a Request</h1>
        <p className='text-gray-500 text-center '>Complete the form below, select a subject, type your question or comment and we will get back to you as soon as possible.</p>
       <form className='flex flex-col gap-3 my-10 cursor-pointer'>
        <label htmlFor='subject'>SUBJECT</label>
        <textarea rows='5' className='bg-gray-100 rounded-xl px-4 py-2 mb-5'/>
        <div className='flex gap-10 flex-col md:flex-row'>
          <div className='flex flex-col gap-2 md:w-1/2'>
        <label htmlFor='name'>YOUR NAME</label>
        <input type='text' className='bg-gray-100 rounded-xl px-4 py-2'/>
        </div>
        <div className='flex flex-col gap-2 md:w-1/2'>
        <label htmlFor='email'>YOUR EMAIL</label>
        <input type='email' className='bg-gray-100 rounded-xl px-4 py-2'/>
        </div>
        </div>
        <button className='border-[#285380] bg-[#285380] hover:border-[#E7A0AE] hover:bg-[#E7A0AE] text-white px-24 py-4 flex items-center justify-center gap-2 rounded-[25rem] mx-auto my-8' >SEND REQUEST<span><FaArrowRightLong /></span></button>
       </form>
      </div>
    </div>
  )
}

export default ContactUs