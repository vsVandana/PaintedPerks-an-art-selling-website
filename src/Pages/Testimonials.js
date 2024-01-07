import React, { useEffect, useState } from "react";
import StataicRating from "./StataicRating";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
// import sec1 from "../utils/images/review_sec1.png";
import { testimonials_data } from "../data/home/Testimonials_data";
// import bg from "../utils/images/review/bg.jpg";

const Testimonials = () => {
  const [currReviewCard, setCurrReviewCard] = useState(0);

  const nextCard = () => {
    setCurrReviewCard((currReviewCard + 1) % testimonials_data.length);
  };
  const prevCard = () => {
    setCurrReviewCard(
      (currReviewCard - 1 + testimonials_data.length) % testimonials_data.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextCard();
    }, 2000);
    return () => clearTimeout(timer);
  }, );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextCard();
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [currReviewCard]);

  const currCard = testimonials_data[currReviewCard];
  return (
  <div className="mx-16 flex justify-center" style={{ backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)' , backgroundRepeat:'no-repeat' ,backgroundSize:'cover'}}>
      <div className=" shadow-md" >
        <div className="p-16 flex flex-col items-center justify-center">
          <h1 className=" text-xl xl:text-3xl lg:text-2xl font-extrabold text-[#285380] ">
            What Clients Say
          </h1>
          <div className=" w-3/4 mx-10 my-4">
            <StataicRating
              rating={currCard.rating}
              className="text-yellow-600 "
            />
            <p className="text-xs xl:text-xl lg:text-md md:text-md sm:text-sm ">
              {currCard.comment}
            </p>
            <div className="flex items-center xl:my-7 my-4">
              <img
                className="w-8 xl:w-20 lg:w-14 md:w-12 sm:w-10 border-2 bg-white  rounded-[100px]"
                src={currCard.profile}
                alt="profile"
              />
              <div className="mx-4">
                <h3 className="font-bold xl:text-xl lg:text-md md:text-md text-xs">
                  {currCard.name}
                </h3>
                <h4 className="tracking-wider lg:text-md sm:text-sm text-xs">
                  {currCard.profession}
                </h4>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <button
              className="text-xs lg:text-md font-bold  py-1 px-1 lg:py-2 xl:px-5 border-2 border-white bg-white rounded-xl mx-1 lg:mx-2 hover:text-white hover:border-[#285380] hover:bg-[#285380]"
              onClick={prevCard}
            >
              <BsArrowLeft />
            </button>
            <button
              className="text-xs lg:text-md font-bold py-1 px-1 lg:py-2 xl:px-5 border-2 border-white bg-white rounded-xl mx-1 lg:mx-2 hover:text-white hover:border-[#285380] hover:bg-[#285380]"
              onClick={nextCard}
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
