import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {

  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button
          onClick={() => paginate(currentPage - 1)}
          className="mr-2 bg-green-950 text-white px-4 py-2 rounded"
        >
          Prev
        </button>
      )}
      {currentPage < totalPages && (
        <button
          onClick={() => paginate(currentPage + 1)}
          className="bg-green-950 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
