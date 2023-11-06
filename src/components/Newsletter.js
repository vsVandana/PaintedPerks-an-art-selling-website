import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-center m-16'>
        <div>
        <h1 className='text-4xl font-extrabold'>Get the latest news, events & more</h1>
        <h1 className='text-4xl font-extrabold'>delivered to your inbox</h1>
        </div>
        <div className='pt-9 relative'>
            <input type='relative email' placeholder='Add your Email' className='w-[650px] text-xl border-2 rounded-3xl py-2.5 px-10' />
            <button className='absolute right-[455px] m-1 py-1.5 px-8 tracking-wider  border-2 hover:border-[#E7A0AE] border-[#285380] rounded-3xl hover:bg-[#E7A0AE] bg-[#285380] text-white text-xl text-bold'>Subscribe</button>
       
        </div>
    </div>
  )
}

export default Newsletter