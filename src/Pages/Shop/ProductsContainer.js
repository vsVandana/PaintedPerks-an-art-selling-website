import React, { useState } from "react";
import StataicRating from "../StataicRating";

import { Link } from "react-router-dom";

// import { AiOutlineHeart } from "react-icons/ai";

const ProductsContainer = ({ items_data = [], selectedSort }) => {
  // State for tracking the index of the hovered product item
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Filter and sort the products based on the selected sorting option
  const filteredItems = items_data
    .filter((item) => {
      switch (selectedSort) {
        case "popularity":
          return item.rating === 5;
        case "rating":
          return item.rating >= 2;
        case "latest":
          return item.rating <= 2;

        default:
          return true;
      }
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));

      switch (selectedSort) {
        case "low-to-high":
          return priceA - priceB;
        case "high-to-low":
          return priceB - priceA;
        default:
          return 0;
      }
    });

  // Function to handle mouse enter on a product item, updating the hovered index
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  // Function to handle mouse leave on a product item, resetting the hovered index
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {filteredItems.map((items) => {
        return (
          <Link to={`/productpage/${items.id}`}>
          <div
            className="card w-full"
            key={items.id}
            onMouseEnter={() => handleMouseEnter(items.id)}
            onMouseLeave={() => handleMouseLeave()}

          >
            {hoveredIndex === items.id ? (
              // Display alternate image and additional options when hovered
              <div className="relative border-2 p-2">
                <img className="w-full" src={items.img2} alt="Product_item" />
                <div className=" flex items-center justify-center lg:mx-2 mx-1 ">
                  <button className="absolute top-[85%] border-2 border-white bg-white tracing-wider font-extrabold py-2 px-16 text-md rounded-3xl hover:border-[#285380] hover:bg-[#285380] hover:text-white">
                    Add to cart
                  </button>
                  {/* <AiOutlineHeart className="absolute top-[87%] right-4 xl:text-3xl lg:text-2xl md:text-xl sm:text-md text-sm text-white hover:bg-white hover:text-3xl hover:text-black hover:border-2 hover:rounded-3xl hover:p-1" /> */}
                </div>
              </div>
            ) : (
              // Display default image when not hovered
              <img className="w-full" src={items.img1} alt="product_item" />
            )}

            {/* Product details */}
            <div className=" py-1 mt-1">
              <h2 className="text-md text-bold tracking-wider text-gray-500">
                {items.img_type}
              </h2>

              <StataicRating rating={items.rating} />
            </div>
            <h1 className="text-gray-700 lg:text-2xl md:text-xl text-md font-medium pb-1">
              {items.title}
            </h1>
            <p className="lg:text-xl text-md font-extrabold pb-1">
              {items.price}
            </p>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsContainer;
