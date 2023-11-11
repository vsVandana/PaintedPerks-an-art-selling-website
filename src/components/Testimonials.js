import React, { useEffect, useState } from "react";
import StataicRating from "./StataicRating";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import sec1 from "../utils/images/review_sec1.png";
import {testimonials_data} from "../data/Testimonials_data";
import bg from "../utils/images/review/bg.jpg"

const Testimonials = () => {
  const [currReviewCard, setCurrReviewCard] = useState(0);

  const nextCard = () => {
    setCurrReviewCard((currReviewCard + 1) % testimonials_data.length);
  };
  const prevCard = () => {
    setCurrReviewCard(
      ((currReviewCard - 1 + testimonials_data.length) % testimonials_data.length)
    )
  };
 useEffect(()=>{
  const timer = setInterval(() => {
    nextCard();
  }, 2000);
  return () => clearTimeout(timer)
 },[currReviewCard])

  const currCard = testimonials_data[currReviewCard];
  return (
    <div className="mx-16 my-10 flex items-center">
 

      <div className="border-2 border-[#f4dfe4] bg-[#f4dfe4] shadow-md ms-4 xl:h-[463px] lg:h-[360px] md:h-[300px]" style={{'backgroundImage':$(url(bg))}}>
        <div className="relative mx-12">
          <h1 className="absolute xl:top-20 lg:top-10 md:top-8 top-5 text-sm xl:text-4xl lg:text-2xl md:text-xl sm:text-md font-extrabold text-[#285380] ">
            What Clients Say
          </h1>
              <div className="absolute xl:top-32 lg:top-20 md:top-16 w-full">
                <StataicRating rating={currCard.rating} className='text-yellow-600 '/>
                <p className="text-sm xl:text-2xl lg:text-md md:text-md sm:text-sm ">{currCard.comment}</p>
                <div className="flex items-center xl:my-7 my-4">
                  <img
                    className="w-8 xl:w-20 lg:w-14 md:w-12 sm:w-10 border-2 bg-white  rounded-[100px]"
                    src={currCard.profile}
                    alt="profile"
                  />
                  <div className="mx-4">
                    <h3 className="font-bold xl:text-xl lg:text-md md:text-md text-sm">{currCard.name}</h3>
                    <h4 className="tracking-wider lg:text-md text-sm">{currCard.profession}</h4>
                  </div>
                </div>
              </div>

          <div className="absolute top-40 sm:top-56 md:top-60 lg:top-72 xl:top-80  right-0 ">
            <button
              className="text-xs lg:text-md font-bold  py-1 px-1 lg:py-2 xl:px-5 border-2 border-white bg-white rounded-xl mx-1 lg:mx-2 hover:text-white hover:border-[#285380] hover:bg-[#285380]"
              onClick={prevCard}
            >
              <BsArrowLeft />
            </button>
            <button
              className="text-xs lg:text-md font-bold py-1 px-1 lg:py-2 xl:px-5 border-2 border-white bg-white rounded-xl mx-1 lg:mx-2 hover:text-white hover:border-[#285380] hover:bg-[#285380]"
              onClick={ nextCard}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
