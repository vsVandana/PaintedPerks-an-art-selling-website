import React, { useState } from "react";
import banner from "../../utils/images/Shop/banner.jpg";
import ProductsContainer from "../Shop/ProductsContainer";
import { ProductCardsData } from "../../data/shop/Card_data";
import ProductContainerHeader from "../Shop/ProductContainerHeader";
import RenderPageNumbers from "../RenderPageNumbers";

const Shop = () => {
  // State variables for selected sort option, current page, and selected quantity
  const [selectedSort, setSelectedSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedQuantity, setSelectedQuantity] = useState(4);
  const [selectedFilter, setSelectedFilter] = useState({ category: '', theme: '' });

  const filteredItems = ProductCardsData
    .filter((item) => {
      const filterCategoryLower = selectedFilter.category ? selectedFilter.category.toLowerCase() : "";
    const filterThemeLower = selectedFilter.theme ? selectedFilter.theme.toLowerCase() : "";

    const itemCategoryLower = item.category.map(cat => cat.toLowerCase());
    const itemImgTypeLower = item.img_type ? item.img_type.toLowerCase() : "";
    const itemTitleLower = item.title ? item.title.toLowerCase() : "";
    const itemTagsLower = item.tags ? item.tags.map(tag => tag.toLowerCase()) : [];

    const matchesCategory = filterCategoryLower && (
      itemCategoryLower.includes(filterCategoryLower) ||
      itemImgTypeLower.includes(filterCategoryLower) ||
      itemTitleLower.includes(filterCategoryLower) ||
      itemTagsLower.includes(filterCategoryLower)
    );

    const matchesTheme = filterThemeLower && (
      itemCategoryLower.includes(filterThemeLower) ||
      itemImgTypeLower.includes(filterThemeLower) ||
      itemTitleLower.includes(filterThemeLower) ||
      itemTagsLower.includes(filterThemeLower)
    );

    return (filterCategoryLower ? matchesCategory : true) &&
           (filterThemeLower ? matchesTheme : true);
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));

      switch (selectedSort) {
        case "low-to-high":
          return priceA - priceB;
        case "high-to-low":
          return priceB - priceA;
        case "popularity":
          return b.rating - a.rating; 
        case "rating":
          return b.rating - a.rating;
        case "latest":
          return b.id - a.id;
        default:
          return 0;
      }
    });

  // console.log(selectedFilter)
  // Calculating total number of items and total number of pages based on selected quantity
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / selectedQuantity);

  // Calculating the start and end indices for the current page
  const startIndex = (currentPage - 1) * selectedQuantity;
  const endIndex = startIndex + selectedQuantity;

  // Extracting the items to be displayed on the current page
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Handling the change in sort option
  const handleSortChange = (option) => {
    setSelectedSort(option);
  };

  // Handling the change in current page
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handling the change in selected quantity per page
  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilter({ ...selectedFilter, [filterType]: filterValue });
  }; 
 

  return (
    <div className="my-10 ">
      {/* Section with title and description */}
      <div className="text-center text-[#285380] mx-10">
        <h1 className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl  font-extrabold my-2">
          All Our Wall Art
        </h1>
        <p>
          Browse wall art prints created by independent artists and find the
          perfect piece. You’ll find art decor prints for every style.
        </p>
      </div>

      {/* Banner section with discount information */}
      <div className="mx-4 my-10 hidden md:block">
        <img src={banner} className="relative h-96 w-full" alt="banner" />
        <div className="absolute top-80 left-20 flex flex-col items-start">
          <h1 className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl font-extrabold mt-1 text-[#285380]">
            Get Up To
          </h1>
          <h1 className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl font-extrabold mt-1 text-[#E7A0AE]">
            25% Off
          </h1>
          <h1 className="xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl font-extrabold mt-1 text-[#285380]">
            Your Order
          </h1>
          <p className="text-[#285380]  md:text-md sm:text-sm text-xs font-semibold mt-4 ms-2">
            Decorate your home, your way.
          </p>
        </div>
      </div>

     
      <div className="border-t-2 mx-4 my-4"></div>

      {/* Product container with header, products, and pagination */}
      <div className="my-8 mx-4 border-b-2">
        {/* Header with sorting and quantity selection */}
        <ProductContainerHeader
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
          selectedQuantity={selectedQuantity}
          onQuantityChange={handleQuantityChange}
          startIndex={startIndex+1}
          endIndex={endIndex}
          totalItems={totalItems}
        />

        {/* Container for displaying products */}
        <ProductsContainer
          items_data={currentItems}
          selectedSort={selectedSort}
          selectedFilter={selectedFilter}
        />
      </div>

      {/* Pagination component */}
      <RenderPageNumbers
        totalPage={totalPages}
        currentPage={currentPage}
        handlePageChanges={handlePageChange}
      />
    </div>
  );
};

export default Shop;
