import { PaginationInfo } from '@/types/property-listing';
import { useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

export function usePagination({
  totalItems,
  itemsPerPage,
  currentPage,
}: UsePaginationProps): PaginationInfo {
  return useMemo(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    return {
      currentPage,
      totalPages,
      startIndex,
      endIndex,
      totalItems,
    };
  }, [totalItems, itemsPerPage, currentPage]);
}

export function usePageNumbers(paginationInfo: PaginationInfo) {
  const { currentPage, totalPages } = paginationInfo;

  return useMemo(() => {
    const pageNumbers: (number | '...')[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }

    // Always show first page
    pageNumbers.push(1);

    if (currentPage <= 3) {
      pageNumbers.push(2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }

    return pageNumbers;
  }, [currentPage, totalPages]);
}
