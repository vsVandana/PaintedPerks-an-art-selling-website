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

  // Calculating total number of items and total number of pages based on selected quantity
  const totalItems = ProductCardsData.length;
  const totalPages = Math.ceil(totalItems / selectedQuantity);

  // Calculating the start and end indices for the current page
  const startIndex = (currentPage - 1) * selectedQuantity;
  const endIndex = startIndex + selectedQuantity;

  // Extracting the items to be displayed on the current page
  const currentItems = ProductCardsData.slice(startIndex, endIndex);

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

      {/* Divider line */}
      <div className="border-t-2 mx-4 my-4"></div>

      {/* Product container with header, products, and pagination */}
      <div className="my-8 mx-4 border-b-2">
        {/* Header with sorting and quantity selection */}
        <ProductContainerHeader
          onSortChange={handleSortChange}
          selectedQuantity={selectedQuantity}
          onQuantityChange={handleQuantityChange}
          startIndex={startIndex+1}
          endIndex={endIndex+1}
          totalItems={totalItems}
        />

        {/* Container for displaying products */}
        <ProductsContainer
          items_data={currentItems}
          selectedSort={selectedSort}
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
