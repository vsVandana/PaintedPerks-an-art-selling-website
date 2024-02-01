import React from 'react'
import { images } from '../../data/home/FeaturedIn_data'
const FeaturedSec = () => {
  return (
    <div className='my-12 mx-4'>
        <h1 className='text-center text-2xl md:text-5xl font-extrabold'>Fetured in</h1>
        <div className='flex items-center py-3'>
    {images.map((image,index)=>{
      return (
      <div className='w-1/5 p-2' key={index}>
        <img className='w-36' src={image} alt='featured_img' />
        </div>)
    })}
    </div>
    </div>
  )
}

export default FeaturedSec