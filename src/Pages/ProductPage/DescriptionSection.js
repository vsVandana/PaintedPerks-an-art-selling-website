import React from "react";
import { description_data } from "../../data/productPage/description_data";

const DescriptionSection = () => {
  return (
    <div className="flex gap-10 justify-between items-center">
      <div className="md:w-3/4 flex flex-col gap-4">
        <h5 className="text-gray-400">PRODUCT INFORMATION</h5>
        <p className="text-3xl">
          This print from our famous painters and artists posters series, from
          the mind of Seven Wall Art, with black, and with vertical layout.
          Animal prints let you show your wild side through your wall
          decoration. A modern touch for your home.
        </p>
        <p>
          If you relate, it’s clear you do need a change – but what’s an easy
          and cost effective way of adding the magic back into your home? The
          surprisingly simple yet overlooked way to reimagine any space begins
          with your walls. Think about it – the empty wall space you’ve been
          sitting opposite for weeks or even years is the perfect blank canvas
          to begin expressing your unique style and creativity.
        </p>
      </div>
 <ul className="md:w-1/4 flex flex-col gap-4">
      {description_data.map((item, index) => {
        return (
        <li key={index} className="flex items-center gap-4">
        <div className="text-3xl">{item.icon}</div>
        <div className="flex flex-col">
          <h3>{item.title}</h3>
          <h3 className="text-gray-500">{item.para}</h3>
        </div>
        </li>);
      })}
      </ul>
    </div>
  );
};

export default DescriptionSection;
