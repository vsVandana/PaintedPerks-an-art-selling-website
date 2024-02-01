import React , {useState} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
const SortingDropdown = ({onSortChange}) => {
    // State variables for managing visibility of sorting
    const [showSortingDropdown, setShowSortingDropdown] = useState(false);

    // State variable for tracking the selected sorting option
  const [selectedSort, setSelectedSort] = useState("Default");
  // Function to toggle the visibility of the sorting dropdown
  const toggleSortingDropdown = () => {
    setShowSortingDropdown(!showSortingDropdown);
  };
  // Function to handle changes in sorting option
  const handleSortChange = (option) => {
    setSelectedSort(option);
    setShowSortingDropdown(false);
    onSortChange(option);
  };
  return (
    <div className="flex items-center gap-2 font-thin relative cursor-pointer">
          <h1 >{`Sort by ${
            selectedSort === "default" ? "Default Sorting" : selectedSort
          }`}</h1>
          <span className="text-xl" onClick={toggleSortingDropdown}>
            <IoMdArrowDropdown />
          </span>
          <ul
            className={`absolute top-[40px] bg-white w-[180%] p-4 text-gray-600 ${
              showSortingDropdown ? "block" : "hidden"
            }`}
          >
            <li className="mb-1" onClick={() => handleSortChange("popularity")}>
              Sort by Popularity
            </li>
            <li className="mb-1" onClick={() => handleSortChange("rating")}>
              Sort by Average rating
            </li>
            <li className="mb-1" onClick={() => handleSortChange("latest")}>
              Sort by latest
            </li>
            <li
              className="mb-1"
              onClick={() => handleSortChange("low-to-high")}
            >
              Sort by Price: low to high
            </li>
            <li
              className="mb-1"
              onClick={() => handleSortChange("high-to-low")}
            >
              Sort by Price: high to low
            </li>
          </ul>
        </div>
  )
}

export default SortingDropdown