import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const QuantityDropdown = ({ selectedQuantity, onQuantityChange }) => {
  // State variables for managing visibility of quantity dropdowns
  const [showQuantityDropdown, setShowQuantityDropdown] = useState(false);

  // Function to toggle the visibility of the quantity dropdown
  const toggleQuantityDropdown = () => {
    setShowQuantityDropdown(!showQuantityDropdown);
  };

  // Function to handle the selection of a quantity from the dropdown
  const handleQuantitySelect = (quantity) => {
    // Calls the provided 'onQuantityChange' function with the selected quantity
    onQuantityChange(quantity);
    // Hides the quantity dropdown after a selection is made
    setShowQuantityDropdown(false);
  };

  return (
    <div className="flex items-center gap-2 font-thin relative cursor-pointer">
      {/* Displaying the selected quantity */}
      <h1>
        Show <span className="font-black">{selectedQuantity}</span>
      </h1>

      {/* Dropdown arrow icon with an onClick event to toggle visibility */}
      <span className="text-xl" onClick={toggleQuantityDropdown}>
        <IoMdArrowDropdown />
      </span>

      {/* Dropdown list with conditional rendering based on state */}
      <ul
        className={`absolute top-[40px] bg-white p-5 text-gray-600 ${
          showQuantityDropdown ? "block" : "hidden"
        }`}
      >
        {[5, 6, 7, 8].map((quantity) => (
          <li
            key={quantity}
            className="mb-1"
            onClick={() => handleQuantitySelect(quantity)}
          >
            {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuantityDropdown;
