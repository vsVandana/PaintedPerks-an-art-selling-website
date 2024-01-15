import React, {useState} from 'react'
import StataicRating from "../StataicRating";
import {AiOutlineHeart} from "react-icons/ai"
const ProductsContainer = ({ items_data, heading }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
     <div className="my-10 flex flex-wrap">
        {items_data.map((items, index) => {
          return (
            <div className="card w-full sm:w-1/4 m-1 p-4 " 
            key={index}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            >
            {(hoveredIndex === index) ? (
              <div className="relative border-2 p-2">
                <img className="w-full" src={items.img2} alt="Product_item" />
              <div className=" flex items-center justify-between lg:mx-2 mx-1 ">
                  <button className="absolute top-[50px] sm:top-[100px] md:top-[110px] lg:top-[175px] xl:top-[250px] left-4 right-4 border-2 border-white bg-white text-xs lg:text-sm font-extrabold py-1 px-1 sm:px-1  md:px-2 xl:px-8 lg:px-4 rounded-3xl hover:border-[#285380] hover:bg-[#285380] hover:text-white">
                    Add to cart
                  </button>
                  <AiOutlineHeart className=" absolute md:hidden xl:top-[258px] lg:top-[190px] md:top-[110px] right-4 xl;text-3xl lg:text-2xl md:text-xl sm:text-md text-sm text-white hover:bg-white hover:text-3xl hover:text-black hover:border-2 hover:rounded-3xl hover:p-1"/>
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
            </div>
          );
        })}
      </div>
    
  );
}

export default ProductsContainer