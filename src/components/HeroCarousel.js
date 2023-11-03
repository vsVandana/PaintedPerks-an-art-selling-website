import React, { useEffect, useState } from "react";
import { paintings } from "../data/hero_section_data";
import ShimmerHeroCarousel from "./ShimmerHeroCarousel";

const HeroCarousel = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0);
 const [pageLoaded , setPageLoaded] = useState(false);
  const nextImg = () => {
    setCurrImgIndex((currImgIndex + 1) % paintings.length);
  };

  const prevImg = () => {
    setCurrImgIndex((currImgIndex - 1 + paintings.length) % paintings.length);
  };
 
  const currentPainting = paintings[currImgIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      nextImg();
    }, 4000);
    return () => clearInterval(timer);
  }, [currImgIndex]);
 
  useEffect(()=>{
    setTimeout(()=>{
      setPageLoaded(true);
    },200)
  },[])

  return(
  pageLoaded ?  (
    <div className=" hero-carousel">
      <button
        onClick={prevImg}
        className="absolute top-[350px] left-2 z-10 text-white p-2 text-3xl font-extrabold shadow-xl"
      >
        &lt;
      </button>
      
      <div
        className="image-container"
        key={currentPainting.index}
      >
        <div className="image-overlay"></div>
        
        <img
          src={currentPainting.image}
          alt="image"
          className="w-[1900px] h-[800px] opacity-70 image "
          loading="lazy"
          // style={imageAnimation}
        />
        <div
          className="text-overlay top-[400px] left-[800px]  "
          // style={{ color: paintings[currImgIndex].color }}
        >
          <p  className="text-2xl slide-in-from-right ">
            {currentPainting.title}
          </p>
          <h1  className="text-8xl font-extrabold  slide-in-from-right ">
            {currentPainting.description1}
          </h1>
          <h1  className="text-8xl font-extrabold  slide-in-from-right ">
            {currentPainting.description2}
          </h1>
          <button
            onClick={nextImg}
            // style={textAnimation}
            className=" bg-white text-[#285380] text-md tracking-widest m-4 py-3 px-12 border-2 border-white rounded-3xl slide-in-from-right"
          >
            Shop Art Online
          </button>
        </div>
      </div>
       
      <button
        onClick={nextImg}
        className="absolute top-[350px] right-2 z-10  p-2 text-white text-2xl font-bold shadow-md"
      >
        &gt;
      </button>
    </div>
  )
  :  <ShimmerHeroCarousel /> 
  )

};

export default HeroCarousel;
