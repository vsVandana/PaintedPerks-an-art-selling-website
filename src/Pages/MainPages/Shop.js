import React from 'react'
import banner from '../../utils/images/Shop/HeadBanner.avif'
const Shop = () => {
  return (
    <div className='my-10'>
      <div className='text-center text-[#285380] mx-10'>
      <h1 className='xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl  font-extrabold my-2'>All Our Wall Art</h1>
      <p>Browse wall art prints created by independent artists and find the perfect piece. You’ll find art decor prints for every style.</p>
      </div>
     <div className='m-10'>
     <img src={banner} className='relative h-96 w-full'/>
     <div className='absolute top-80 left-28 flex flex-col items-start'>
     <h1 className='xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl font-extrabold mt-1 text-[#285380]'>Get Up To</h1>
     <h1 className='xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl font-extrabold mt-1 text-[#E7A0AE]'>25% Off</h1>
     <h1 className='xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl font-extrabold mt-1 text-[#285380]'>Your Order</h1>
     <p className='text-[#285380] text-xl md:text-md sm:text-sm xs:text-xs font-semibold'>Decorate your home, your way.</p>
     </div>
     </div>
    
      <div className='my-10 mx-5 flex gap-2'>
        <div className='border-2 w-1/4 h-10'></div>
        <div className='border-2 w-3/4 h-10'></div>
      </div>
    </div>
  )
}

export default Shop