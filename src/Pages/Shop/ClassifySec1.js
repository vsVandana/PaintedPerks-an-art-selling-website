import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ClassifySec1 = ({ heading, items }) => {
  const [showItem, setShowItem] = useState(true);
  const toggleArrow = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="pt-4 pb-8 pe-2 border-t-2">
      <div className="flex items-center justify-between my-4">
        <h1 className="font-extrabold text-2xl">{heading}</h1>
        <div onClick={toggleArrow}>
          {showItem ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <ul className={`text-gray-500 ${showItem ? "block" : "hidden"} `}>
        {showItem &&
          items?.map((item, index) => {
            return (
              <li key={index} className="my-1">
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ClassifySec1;
