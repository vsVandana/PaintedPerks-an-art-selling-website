import React, { useState } from "react";
import StataicRating from "../StataicRating";

const DetailSection = ({ Product }) => {
  const staticSizes = ["30x40", "40x50", "50x50"];

  const [selectedSize, setSelectedSize] = useState("");

  const [quantity, setQuantity] = useState(1);
  const handleDecreaseQuantity = () => {
    if(quantity >1){
        setQuantity(quantity-1);
    }
  }
  const handleIncreaseQuantity = () => {
    setQuantity(quantity+1);
  }
  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
  };
  return (
    <div className="md:w-1/2">
      <p className="text-gray-400 mb-2">{Product.img_type}</p>
      <h2 className="lg:text-5xl mb:text-4xl text-3xl mb-2 font-black">{Product.title}</h2>
      <p className="text-2xl mb-2">{Product.price}</p>
      <p className="flex items-center gap-2">
        <StataicRating rating={Product.rating} />{" "}
        <span className="text-gray-400">(5 Reviews)</span>
      </p>

      <div className="border-t-2 border-gray-200 my-7"></div>
      <p className="flex flex-wrap ">
        Quia in harum exercitationem sit sequi omnis. Tenetur id facere illo
        dolor. Nulla molestiae voluptatem mollitia ullam necessitatibus sit
        quibusdam.
      </p>
      <div className="flex flex-col my-7 gap-2">
        <label htmlFor="size" className="text-lg font-semibold">
          Size
        </label>
        <select
          id="size"
          value={selectedSize}
          onChange={handleSizeChange}
          className="border-2  rounded-3xl px-4 py-2 "
        >
          <option value="">Choose a size</option>
          {staticSizes.map((size) => {
            return (
              <option key={size} value={size}>
                {size}
              </option>
            );
          })}
        </select>
      </div>

      <div className="my-10 flex gap-10 items-center">
        <button className="flex md:gap-10 gap-7 border-2 border-gray-100 text-xl py-2 lg:px-6 md:px-3 sm:px-6 px-3 rounded-3xl bg-gray-100">
            <button onClick={handleDecreaseQuantity}>-</button>
            <button>{quantity}</button>
            <button onClick={handleIncreaseQuantity}>+</button>
        </button>
        <button className=" border-2 border-[#E7A0AE] sm:text-sm text-xs py-3 xl:px-32 lg:px-24 md:px-12 sm:px-20 px-10 rounded-3xl bg-[#E7A0AE] hover:border-[#285380] hover:bg-[#285380] text-white">ADD TO CART</button>
      </div>
      <div className="border-t-2 border-gray-200 my-7"></div>
<div className="gap-10">
  <h6 className="text-sm my-2"> <span className="font-semibold">CATEGORIES: </span>  All Art Prints, Posters</h6>
  <h6 className="text-sm my-2"> <span className="font-semibold">TAGS: </span>  Art, Design, Graphic Art, Illustration, Photography</h6>
</div>
    </div>
  );
};

export default DetailSection;
