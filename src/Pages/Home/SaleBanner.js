import React from 'react'
import banner from '../utils/images/banner3.png'

const SaleBanner = () => {
  return (
    <div className='relative my-4 md:my-10 mx-16 '>
        <img className='w-full' src={banner} alt='bannerIng'/>
        <div className=''>
            <div className='absolute lg:top-20 lg:left-12 xl:text-5xl md:top-14 md:left-10 sm:top-10 top-5 left-5 sm:left-8 text-sm lg:text-3xl text-white font-extrabold'>
            <h1 >Clearance Sale </h1>
            <h1 >In-store & Online</h1>
            </div>
            <div className='absolute lg:top-16 sm:right-14 right-2 md:top-12 sm:top-8 top-1 text-white '>
                <h1  className='xl:text-5xl lg:text-3xl sm:text-sm text-xs font-extrabold py-1'>30% Off</h1>
                <h2 className='xl:text-2xl lg:text-xl sm:text-sm text-xs tracking-wider font-extrabold'>Home Decor</h2>
                <button className="my-2 border-2 border-white bg-white text-xs xl:text-xl lg:text-md text-black font-extrabold py-1 xl:px-11 lg:px-7 md:px-5 sm:px-3 px-1 rounded-3xl hover:border-[#285380] hover:bg-[#285380] hover:text-white">Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default SaleBanner