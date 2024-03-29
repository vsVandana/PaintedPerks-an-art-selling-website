import React, { useState } from "react";
import StataicRating from "../StataicRating";
// import {AiOutlineHeart} from "react-icons/ai"
import { Link } from "react-router-dom";
const PRODUCT_CARDS= ({ items_data, heading }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="mx-4 py-10">
      <div className="flex items-center justify-between ">
        <h1 className="md:text-3xl sm:text-xl text-lg font-extrabold">{heading}</h1>
        <Link to='/shop'>
        <button className="border-2 border-[#285380] rounded-3xl bg-[#285380] px-4 sm:px-10 py-2 text-sm md:text-md text-white tracking-wider font-semibold hover:border-[#E7A0AE] hover:bg-[#E7A0AE]">
          View More
        </button>
        </Link>
      </div>

      <div className="my-12 flex justify-between flex-wrap sm:flex-nowrap">
        {items_data.map((items, index) => {
          return (
          
            <div className="card w-full sm:w-1/4 m-1 p-4 border-2" 
            key={index}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            >
              <Link to={`/productpage/${items.id}`}>
            {(hoveredIndex === index) ? (
              <div className="relative border-2 p-2">
                <img className="w-full" src={items.img2} alt="Product_item" />
              <div className=" flex items-center justify-center lg:mx-2 mx-1 ">
                  <button className="absolute lg:top-[80%] sm:top-[70%] top-[85%] border-2 border-white bg-white text-sm font-extrabold px-12 py-2 md:py-1 md:px-8 lg:py-2  xl:px-16 rounded-3xl hover:border-[#285380] hover:bg-[#285380] hover:text-white">
                    Add to cart
                  </button>
                  {/* <AiOutlineHeart className=" absolute md:hidden xl:top-[258px] lg:top-[190px] md:top-[110px] right-4 xl;text-3xl lg:text-2xl md:text-xl sm:text-md text-sm text-white hover:bg-white hover:text-3xl hover:text-black hover:border-2 hover:rounded-3xl hover:p-1"/> */}
                </div>
                </div>
            )
            :<img className="w-full" src={items.img1} alt="product_item" />}
              <div className=" py-1 mt-1">
                <h2 className="text-md text-bold tracking-wider text-gray-500">
                  {items.img_type}
                </h2>

                <StataicRating rating={items.rating} />
              </div>
              <h1 className="text-gray-700 lg:text-2xl md:text-xl text-md font-medium pb-1">
                {items.title}
              </h1>
              <p className="lg:text-xl text-md font-extrabold pb-1">{items.price}</p>
              </Link>
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default PRODUCT_CARDS;
