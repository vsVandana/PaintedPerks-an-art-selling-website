import React, {useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import ClassifyProduds from "../Shop/ClassifyProduds";
import { BsFilterLeft } from "react-icons/bs";
const ProductContainerHeader = ({ onSortChange }) => {
    const [showFilterContent, setShowFilterContent] = useState(false);
    const [showSortingDropdown, setShowSortingDropdown] = useState(false);
    const [showQuantityDropdown, setShowQuantityDropdown] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Default');

    const toggleSortingDropdown = () => {
      setShowSortingDropdown(!showSortingDropdown);
    }
    const toggleQuantityDropdown = () => {
      setShowQuantityDropdown(!showQuantityDropdown);
    }
  const toggleFilter = () => {
    setShowFilterContent(!showFilterContent);
  };
  const toggleCloseFilter = () => {
    setShowFilterContent(!showFilterContent);
  };

  const handleSortChange = (option) => {
    setSelectedSort(option);
    setShowSortingDropdown(false);
    onSortChange(option);
  }
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
    <h2 className="font-thin hidden md:block">Showing 1-12 of 32 results</h2>
    <div className='flex gap-2'>
      <div className='flex items-center gap-2 font-thin relative'>
        <h1>{`Sort by ${selectedSort === 'default' ? 'Default Sorting' : selectedSort}`}</h1>
        <span className='text-xl' onClick={toggleSortingDropdown}><IoMdArrowDropdown /></span>
        <ul className={`absolute top-[40px] bg-white w-[180%] p-4 text-gray-600 ${showSortingDropdown ? 'block' : 'hidden'}`}>
          <li className='mb-1' onClick={() => handleSortChange('popularity')}>Sort by Popularity</li>
          <li  className='mb-1' onClick={() => handleSortChange('rating')}>Sort by Average rating</li>
          <li  className='mb-1' onClick={() => handleSortChange('latest')}>Sort by latest</li>
          <li  className='mb-1'  onClick={() => handleSortChange('low-to-high')}>Sort by Price: low to high</li>
          <li  className='mb-1' onClick={() => handleSortChange('high-to-low')}>Sort by Price: high to low</li>
        </ul>
        </div>
      <div className='flex items-center gap-2 font-thin relative' >
        <h1>Show <span>9</span></h1>
         <span className='text-xl' onClick={toggleQuantityDropdown}><IoMdArrowDropdown /></span>
         <ul className={`absolute top-[40px] bg-white p-5 text-gray-600 ${showQuantityDropdown ? 'block' : 'hidden'}`}>
          <li className='mb-1'>3</li>
          <li  className='mb-1'>4</li>
          <li  className='mb-1'>5</li>
          <li  className='mb-1'>6</li>
          <li  className='mb-1'>7</li>
          <li  className='mb-1'>8</li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default ProductContainerHeader