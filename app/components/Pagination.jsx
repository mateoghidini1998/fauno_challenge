import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {

  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          className="mr-2 bg-white text-green-950 border border-green-950 hover:bg-green-950 hover: px-4 py-2 rounded hover:text-white hover:border-white"
        >
          Prev
        </button>
      )}
      {currentPage < totalPages && (
        <button
          onClick={() => paginate(currentPage + 1)}
          className="bg-white text-green-950 border border-green-950 hover:bg-green-950 hover: px-4 py-2 rounded hover:text-white hover:border-white"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
