import React from 'react'
import { FaAngleDown } from "react-icons/fa"; 

const ClassifySec1= ({heading , items}) => {
  return (
    <div>
      <div className='flex justify-between'>
      <h1 className='font-bold text-2xl'>{heading}</h1>
      <FaAngleDown className='text-2xl'/>
      </div>
      {items?.map((item, index) => {
        return(
          <ul>
            <li key={index}>{item}</li>
          </ul>
        )
      })

      }
    </div>
  )
}

export default ClassifySec1