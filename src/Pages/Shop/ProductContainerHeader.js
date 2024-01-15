import React, {useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import ClassifyProduds from "../Shop/ClassifyProduds";
import { BsFilterLeft } from "react-icons/bs";
const ProductContainerHeader = () => {
    const [showFilterContent, setShowFilterContent] = useState(false);
  const toggleFilter = () => {
    setShowFilterContent(!showFilterContent);
  };
  const toggleCloseFilter = () => {
    setShowFilterContent(!showFilterContent);
  };
  return (
    <div className="flex items-center gap-4 justify-between">
    <div className="relative font-bold text-xl">
      <div onClick={toggleFilter} className="flex items-center gap-1">
        <BsFilterLeft className="text-2xl" />
        Filter
      </div>
      <ClassifyProduds
        isOpen={showFilterContent}
        toggleSidebar={toggleFilter}
        closeSidebar={toggleCloseFilter}
      />
    </div>
    <h2 className="font-thin">Showing 1-12 of 32 results</h2>
    <div className='flex gap-2'>
      <div className='flex items-center gap-2 font-thin '>Sort by popularity<span className='text-xl'><IoMdArrowDropdown /></span></div>
      <div className='flex items-center gap-2 font-thin' >Show 9 <span className='text-xl'><IoMdArrowDropdown /></span></div>
    </div>
    </div>
  )
}

export default ProductContainerHeader