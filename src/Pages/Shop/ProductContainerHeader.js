import React, { useState } from "react";
import ClassifyProduds from "../Shop/ClassifyProduds";
import { BsFilterLeft } from "react-icons/bs";
import SortingDropdown from "./SortingDropdown";
import QuantityDropdown from "./QuantityDropdown";
const ProductContainerHeader = ({ onSortChange , selectedQuantity, onQuantityChange }) => {
  // State variables for managing visibility of filter
  const [showFilterContent, setShowFilterContent] = useState(false);
 
  // Function to toggle the visibility of the filter content
  const toggleFilter = () => {
    setShowFilterContent(!showFilterContent);
  };

  // Function to close the filter content (currently the same as toggleFilter)
  const toggleCloseFilter = () => {
    setShowFilterContent(!showFilterContent);
  };

  return (
    <div className="flex items-center gap-4 justify-between">
      {/* Filter Section */}
      <div className="relative font-bold ">
        <div onClick={toggleFilter} className="flex items-center gap-1 text-xl">
          <BsFilterLeft className="text-2xl" />
          Filter
        </div>
        <ClassifyProduds
          isOpen={showFilterContent}
          toggleSidebar={toggleFilter}
          closeSidebar={toggleCloseFilter}
        />
      </div>

      {/* Results Display Section */}
      <h2 className="font-thin hidden md:block">Showing 1-12 of 32 results</h2>
      {/* Sorting and Quantity Dropdown Section */}
      <div className="flex gap-7">
        {/* Sorting Dropdown */}
       <SortingDropdown onSortChange={onSortChange}/>

        {/* Quantity Dropdown */}
        <QuantityDropdown selectedQuantity={selectedQuantity} onQuantityChange={onQuantityChange}/>
      </div>
    </div>
  );
};

export default ProductContainerHeader;
