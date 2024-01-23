import React, { useEffect, useState } from "react";
import { paintings } from "../../data/home/hero_section_data";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const [isHovered , setIsHovered] = useState(false)

  const nextImg = () => {
    if(!isHovered)
    setCurrImgIndex((currImgIndex + 1) % paintings.length);
  };

  const prevImg = () => {
    if(!isHovered)
    setCurrImgIndex((currImgIndex - 1 + paintings.length) % paintings.length);
    // Add paintings.length bcz when we are on 0 index and after we are clicking on prevbtn it should show the last index
  };
  const handleMouseEnter= ()=>{
    setIsHovered(true);
  }
  const handleMouseLeave= ()=>{
    setIsHovered(false);
  }
  const currentPainting = paintings[currImgIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      nextImg();
    }, 3000);
    return () => clearInterval(timer);
  },);

  return(
    <div className="hero-carousel w-full " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={prevImg}
        className="absolute top-[50%] left-[0%] z-10 text-white p-2 text-2xl font-extrabold shadow-md"
      >
        &lt;
      </button>
      
      <div
        className="image-container "
        key={currentPainting.index}
      >
        <div className="image-overlay "></div>
        
        <img
          src={currentPainting.image}
          alt="currentPainting"
          className="w-full opacity-70 image h-screen"
          loading="lazy"
          // style={imageAnimation}
        />
        <div
          className="text-overlay  "
          // style={{ color: paintings[currImgIndex].color }}
        >
          {/* <p  className="text-2xl md:text-xl sm:text-md slide-in-from-right ">
            {currentPainting.title}
          </p> */}
          <h1  className="xl:text-7xl md:text-7xl  text-5xl font-black tracking-wide slide-in-from-right ">
            {currentPainting.description1}
          </h1>
          <h1  className="xl:text-7xl md:text-7xl  text-5xl font-black  slide-in-from-right ">
            {currentPainting.description2}
          </h1>
          <Link to='/shop'>
          <button
            // style={textAnimation}
            className=" bg-white text-[#285380] lg:text-lg md:text-md text-sm tracking-widest m-4 py-3 px-4 sm:px-8 md:px-12 lg:px-12 xl:px-12 border-2  border-white rounded-3xl slide-in-from-right"
          >
            Shop Art Online
            
          </button>
          </Link>
        </div>
      </div>
       
      <button
        onClick={nextImg}
        className="absolute top-[50%] right-[0%] z-10 p-2 text-white text-2xl font-extrabold shadow-md"
      >
        &gt;
      </button>
    </div>
  )

};

export default HeroCarousel;
