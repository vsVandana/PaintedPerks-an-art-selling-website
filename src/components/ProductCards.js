import React, { useState } from "react";
import StataicRating from "./StataicRating";
import {AiOutlineHeart} from "react-icons/ai"
const PRODUCT_CARDS= ({ items_data, heading }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="m-16 py-10">
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl font-extrabold">{heading}</h1>
        <button className="border-2 border-[#285380] rounded-3xl bg-[#285380] px-10 py-2 text-xl text-white tracking-wider font-semibold hover:border-[#E7A0AE] hover:bg-[#E7A0AE]">
          View More
        </button>
      </div>

      <div className="my-12 flex justify-between">
        {items_data.map((items, index) => {
          return (
            <div className="card w-1/4 m-1 p-4 border-2" 
            key={index}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            >
            {(hoveredIndex === index) ? (
              <div className="relative border-2 p-2">
                <img className="w-full" src={items.img2} alt="image2" />
              <div className=" flex items-center justify-between mx-2 ">
                  <button className="absolute top-[380px] left-4 border-2 border-white bg-white text-md font-bold py-2 px-8 rounded-3xl hover:border-[#285380] hover:bg-[#285380] hover:text-white">
                    Add to cart
                  </button>
                  <AiOutlineHeart className=" absolute top-[388px] right-4 text-3xl text-white hover:bg-white hover:text-4xl hover:text-black hover:border-2 hover:rounded-3xl hover:p-1"/>
                </div>
                </div>
            )
            :<img className="w-full" src={items.img1} alt="image1" />}
              <div className="flex justify-between py-1 mt-1">
                <h2 className="text-md text-bold tracking-wider text-gray-500">
                  {items.img_type}
                </h2>

                <StataicRating rating={items.rating} />
              </div>
              <h1 className="text-gray-700 text-2xl font-medium pb-1">
                {items.title}
              </h1>
              <p className="text-xl font-extrabold pb-1">{items.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PRODUCT_CARDS;
