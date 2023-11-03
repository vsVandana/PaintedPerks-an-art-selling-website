import React from 'react'

const ShimmerHeroCarousel = () => {
  return (
        <div className=" relative">
        <div className="w-[1900px] h-[800px] opacity-70 image bg-[#E7A0AE]"/>
        <div
          className="absolute top-[200px] left-[500px]  "
        >
          <p className="text-2xl w-72 h-5 bg-[#f6e0e5] border-2 border-[#f5e2e6] rounded-3xl my-2">
            
          </p>
          <h1  className="text-8xl w-96 h-10 bg-[#f5e2e6] border-2 border-[#f5e2e6] rounded-3xl  my-2">
            
          </h1>
          <h1  className="text-8xl w-96 h-10 bg-[#f5e2e6] border-2 border-[#f5e2e6] rounded-3xl my-2">
            
          </h1>
          <button
            
            className="bg-[#f5e2e6] text-[#285380] text-md tracking-widest m-4 py-3 px-16 border-2 border-white rounded-3xl "
          >        
          </button>
        </div>
      </div>
    
  )
}

export default ShimmerHeroCarousel