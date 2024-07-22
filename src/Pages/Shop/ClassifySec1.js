import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ClassifySec1 = ({ heading, items, onFilterChange, filterType }) => {
  // State to manage the visibility of items in the collapsible section
  const [showItem, setShowItem] = useState(true);
  // Toggles the visibility of items in the collapsible section.
  const toggleArrow = () => {
    setShowItem(!showItem);
  };
  const handleItemClick = (item) => {
    console.log(item);
    if (onFilterChange) {
      onFilterChange(filterType, item);
    }
    setShowItem(false);
  };
  return (
    <div className="pt-4 pb-8 pe-2 border-t-2">
      {/* Collapsible section header */}
      <div className="flex items-center justify-between my-4">
        <h1 className="font-extrabold text-2xl">{heading}</h1>
        {/* Arrow icon to indicate collapsibility */}
        <div onClick={toggleArrow}>
          {showItem ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {/* List of items in the collapsible section */}
      <ul className={`text-gray-500 ${showItem ? "block" : "hidden"} `}>
        {showItem &&
          items?.map((item, index) => {
            return (
              <li key={index} className="my-1 cursor-pointer"  onClick={() => handleItemClick(item)}>
                {item}
              </li>
              
            );
          })}
      </ul>
    </div>
  );
};

export default ClassifySec1;
