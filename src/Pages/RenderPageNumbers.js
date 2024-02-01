import { GrFormPrevious , GrFormNext } from "react-icons/gr";
 
 const RenderPageNumbers = ({ totalPage, handlePageChanges , currentPage }) => {
  // Create an array of page numbers from 1 to totalPage
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex items-center justify-center text-xl text-gray-500 gap-10 cursor-pointer">
        {/* Render previous button if not on the first page */}
      {currentPage > 1 && (
         <button       
         onClick={() => handlePageChanges(currentPage - 1)}
       >
         <GrFormPrevious />
       </button>
      )}
        {/* Render page buttons */}
      {pageNumbers.map((pageNumber) => (
        <button
          className={pageNumber === currentPage ? 'activepage' : ''}
          key={pageNumber}
          onClick={() => handlePageChanges(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {/* Render next button if not on lastpage */}
      {currentPage < totalPage && (
         <button       
         onClick={() => handlePageChanges(currentPage + 1)}
       >
         <GrFormNext />
       </button>
      )}
    </div>
  );
};
export default RenderPageNumbers;
