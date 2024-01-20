import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-center m-16 '>
        <div>
        <h1 className='md:text-4xl text-xl font-extrabold'>Get the latest news, events & more</h1>
        <h1 className='md:text-4xl text-xl font-extrabold'>delivered to your inbox</h1>
        </div>
        <div className='pt-9 flex justify-center sm:flex-row flex-col gap-6 my-6'>
            <input type='email' placeholder='Add your Email' className='text-sm md:text-md lg:text-xl border-2  rounded-3xl md :rounded-s-3xl  py-1 sm:py-2.5 px-10 ' />
            <button className='py-1 sm:py-2.5 px-8 tracking-wider  border-2 hover:border-[#E7A0AE] border-[#285380] rounded-3xl md:rounded-e-3xl  hover:bg-[#E7A0AE] bg-[#285380] text-white text-xl text-bold'>Subscribe</button>
       
        </div>
    </div>
  )
}

export default Newsletter