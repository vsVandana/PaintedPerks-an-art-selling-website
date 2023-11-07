import React, { useState } from "react";
import StataicRating from "./StataicRating";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import sec1 from "../utils/images/review_sec1.png";
import { review_data } from '../data/Review_data';

const Review = () => {
  const [currReviewCard, setCurrReviewCard] = useState(0);

  const nextCard = () => {
    setCurrReviewCard((currReviewCard + 1) % review_data.length);
  };
  const prevCard = () => {
    setCurrReviewCard(
      (currReviewCard - 1 + review_data.length) % review_data.length
    );
  };
  return (
    <div className="mx-16 my-10 flex items-center">

      <div className="relative w-1/2 shadow-md me-4">
        <img src={sec1} alt="banner" />
        <div className="absolute top-20 left-14">
          <h1 className="text-4xl font-bold text-[#285380] ">Art For</h1>
          <h1 className="text-4xl font-bold text-[#285380] mb-4">Every Wall</h1>
          <p className="text-xl text-gray-700 ">
            We are a local brand,Bringing
          </p>
          <p className="text-xl text-gray-700 "> you carefully designed and</p>
          <p className="text-xl text-gray-700 mb-4">unique art prints.</p>
          <button className="border-2 border-[#285380] rounded-3xl bg-[#285380] px-10 py-2 text-xl text-white tracking-wider font-semibold hover:border-[#E7A0AE] hover:bg-[#E7A0AE]">
            About Us
          </button>
        </div>
      </div>

      <div className="border-2 border-[#eccbd2] bg-[#eccbd2] w-1/2 shadow-md ms-4 h-[463px]">
        <div className="relative mx-12">
          <h1 className="absolute top-20  text-4xl font-extrabold text-[#285380] ">
            What Clients Say
          </h1>
          {review_data?.map((cards, index) => {
            return (
              <div className="absolute top-32 w-full" key={index}>
                <StataicRating rating={cards[currReviewCard]?.rating} />
                <p className="text-xl ">{cards[currReviewCard]?.comment}</p>
                <div className="flex items-center my-7">
                  <img
                    className="w-16 border-2 bg-white  rounded-3xl"
                    src={cards[currReviewCard]?.profile}
                    alt="profile"
                  />
                  <div className="mx-4">
                    <h3 className="font-bold text-xl">{cards[currReviewCard]?.name}</h3>
                    <h4 className="tracking-wider">{cards[currReviewCard]?.profession}</h4>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="absolute top-96 right-8">
            <button
              className="py-3 px-5 border-2 border-white bg-white rounded-xl mx-2 hover:text-white hover:border-[#285380] hover:bg-[#285380]"
              onClick={prevCard}
            >
              <BsArrowLeft />
            </button>
            <button
              className="py-3 px-5 border-2 border-white bg-white rounded-xl mx-2 hover:text-white hover:border-[#285380] hover:bg-[#285380]"
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

export default Review;
