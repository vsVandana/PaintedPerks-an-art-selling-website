import React from 'react'
import banner from '../utils/images/banner3.png'

const SaleBanner = () => {
  return (
    <div className='relative my-10 mx-16 '>
        <img className='w-full' src={banner} alt='bannerIng'/>
        <div className=''>
            <div className='absolute top-36 left-20 text-5xl text-white font-extrabold'>
            <h1 >Clearance Sale </h1>
            <h1 >In-store & Online</h1>
            </div>
            <div className='absolute top-36 right-36 text-white '>
                <h1  className='text-5xl font-extrabold py-1'>30% Off</h1>
                <h2 className='text-2xl tracking-wider font-bold'>Home Decor</h2>
                <button className="my-2 border-2 border-white bg-white text-xl text-black  font-bold py-2 px-11 rounded-3xl hover:border-[#285380] hover:bg-[#285380] hover:text-white">Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default SaleBanner