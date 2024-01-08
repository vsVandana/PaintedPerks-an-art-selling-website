import React, { useEffect, useState } from "react";
import { paintings } from "../../data/home/hero_section_data";

const HeroCarousel = () => {
  const [currImgIndex, setCurrImgIndex] = useState(0);

  const nextImg = () => {
    setCurrImgIndex((currImgIndex + 1) % paintings.length);
  };

  const prevImg = () => {
    setCurrImgIndex((currImgIndex - 1 + paintings.length) % paintings.length);
    // Add paintings.length bczwhen we are on 0 index and after we are clicking on prevbtn it should show the last index
  };
 
  const currentPainting = paintings[currImgIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      nextImg();
    }, 4000);
    return () => clearInterval(timer);
  }, );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextImg();
  //   }, 4000);
  //   return () => clearInterval(timer);
  // }, [currImgIndex]);


  return(
    <div className="hero-carousel w-full ">
      <button
        onClick={prevImg}
        className="absolute top-[50%] left-[0%] z-10 text-white p-2 text-3xl font-extrabold shadow-xl"
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
          className="w-full opacity-70 image "
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
          <h1  className="xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl text-xl font-black  slide-in-from-right ">
            {currentPainting.description1}
          </h1>
          <h1  className="xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl text-xl font-black  slide-in-from-right ">
            {currentPainting.description2}
          </h1>
          <button
            // style={textAnimation}
            className=" bg-white text-[#285380] md:text-md lg:text-md xl:text-md sm:text-sm tracking-widest m-4 py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 px-4 sm:px-8 md:px-12 lg:px-12 xl:px-12 border-2  border-white rounded-3xl slide-in-from-right"
          >
            Shop Art Online
          </button>
        </div>
      </div>
       
      <button
        onClick={nextImg}
        className="absolute top-[50%]  right-[0%] z-10  p-2 text-white text-2xl font-bold shadow-md"
      >
        &gt;
      </button>
    </div>
  )

};

export default HeroCarousel;
