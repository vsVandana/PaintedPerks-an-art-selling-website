import React from 'react'
import { review_data } from '../../data/productPage/review_data'
import StataicRating from '../StataicRating'
const ReviewSection = ({Product}) => {
  return (
    <div >
      <h1 className='mx-5 my-6 tracking-wider text-xl text-gray-600'>6 REVIEWS FOR <span className='uppercase'>{Product.title}</span></h1>
      <ul className='flex flex-col gap-5'>
        {review_data.map((item,index)=>{
          return(
            <li key={index} className='flex items-start hover:text-gray-950'>
           <div className="bg-slate-400 border-2 py-2 px-4 rounded-3xl mx-4">{item.profileWord}</div>
           <div>
            <StataicRating rating={item.rating}/>
            <h3 className='font-bold'>{item.name}</h3>
            <p className='text-gray-500'>{item.date}</p>
            <p className='text-gray-500'>{item.message}</p>
           </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ReviewSection