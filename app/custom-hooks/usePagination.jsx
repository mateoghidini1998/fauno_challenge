import { useState } from "react";

const usePagination = (initialPage = 1, initialPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    currentPage,
    perPage,
    setPerPage,
    paginate,
  };
};

export default usePagination;
