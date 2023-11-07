import React from 'react'

const BANNER_SEC = ({banner_data}) => {
  return (
    <div className='relative my-10 mx-16'>
        <img className='w-full h-[600px]'  src={banner_data.image} alt='banner'/>
        <div className='absolute top-[150px] left-[150px] text-white'>
            <h1 className='text-6xl font-extrabold '>{banner_data.title1}</h1>
            <h1 className='text-6xl font-extrabold '>{banner_data.title2}</h1>
            <h1 className='text-6xl font-extrabold '>{banner_data.title3}</h1>
            <button className='text-xl text-bold tracking-wider my-6 py-2 px-11 border-2 rounded-3xl bg-white text-[#285380] hover:text-white hover:bg-[#285380] hover:border-[#285380]'>Discover Now</button>
        </div>
    </div>
  )
}

export default BANNER_SEC