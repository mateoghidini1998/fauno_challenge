import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {

  return (
    <div className="flex justify-center items-center mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          className="bg-white text-[#0F9B74] border border-[#0F9B74] hover:bg-[#0F9B74] hover: px-4 py-2 rounded-[6px] hover:text-white hover:border-white"
        >
          Prev
        </button>
      )}
      {currentPage > 1 &&
      <span className="text-[#0F9B74] mx-6">{currentPage}</span>
      }
      {currentPage < totalPages && (
        <button
          onClick={() => paginate(currentPage + 1)}
          className="bg-white text-[#0F9B74] border border-[#0F9B74] hover:bg-[#0F9B74] hover: px-4 py-2 rounded-[6px] hover:text-white hover:border-white"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
