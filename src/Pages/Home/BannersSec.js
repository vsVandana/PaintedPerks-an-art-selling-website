import React from 'react'
import { Link } from 'react-router-dom'

const BANNER_SEC = ({banner_data}) => {
  return (
    <div className='banner-sec relative flex items-center justify-start my-2 mx-4'>
        <img className='relative bg-center bg-cover w-full overflow-hidden xl:h-[33rem]  lg:h-[32rem] md:h-[30rem] h-[27rem] opacity-2'  src={banner_data.image} alt='banner'/>
        <div className='banner-datails absolute  text-white tracking-wider ps-10  lg:w-[38rem] md:w-[35rem] sm:w-[35rem]'>
            <h1 className='xl:text-7xl lg:text-5xl md:text-5xl  sm:text-4xl text-3xl font-extrabold '>{banner_data.title1}</h1>
            <h1 className='xl:text-6xl  md:text-5xl  sm:`text-4xl  font-extrabold '>{banner_data.title2}</h1>
            <h1 className='xl:text-6xl  md:text-5xl  sm:`text-4xl font-extrabold '>{banner_data.title3}</h1>
            <Link to='/shop'>
            <button className='lg:text-xl text-lg  tracking-widest my-6 py-3 px-4 sm:px-8 md:px-12 lg:px-12 xl:px-12 text-bold  border-2 rounded-[2.5rem] bg-white text-[#285380] hover:text-white hover:bg-[#285380] hover:border-[#285380]'>Discover Now</button>
            </Link>
        </div>
    </div>
  )
}

export default BANNER_SEC