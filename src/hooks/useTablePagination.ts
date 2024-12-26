import { useState } from 'react';

export const useTablePagination = (totalItems: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalItems);

  return {
    currentPage,
    rowsPerPage,
    totalPages,
    startIndex,
    endIndex,
    setCurrentPage,
    setRowsPerPage,
  };
};