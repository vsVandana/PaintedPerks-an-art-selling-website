import React from 'react'

const BANNER_SEC = ({banner_data}) => {
  return (
    <div className='relative my-4 md:my-10 mx-16'>
        <img className='w-full lg:h-[600px] sm:h-[350px] h-[200px]'  src={banner_data.image} alt='banner'/>
        <div className='absolute top-[40px] sm:top-[90px] xl:top-[150px] left-[80px] text-white'>
            <h1 className='xl:text-6xl lg:text-4xl md:text-3xl sm:text-xl text-md font-extrabold '>{banner_data.title1}</h1>
            <h1 className='xl:text-6xl lg:text-4xl md:text-3xl sm:text-xl text-md  font-extrabold '>{banner_data.title2}</h1>
            <h1 className='xl:text-6xl lg:text-4xl md:text-3xl sm:text-xl text-md  font-extrabold '>{banner_data.title3}</h1>
            <button className='xl:text-xl lg:text-md md:text-md text-sm text-bold tracking-wider my-6 py-2 px-2 sm:px-5 xl:px-11 lg:px-8 border-2 rounded-3xl bg-white text-[#285380] hover:text-white hover:bg-[#285380] hover:border-[#285380]'>Discover Now</button>
        </div>
    </div>
  )
}

export default BANNER_SEC