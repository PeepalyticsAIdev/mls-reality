import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, m } from 'motion/react';

import { PropertyListingsProps, SortOption } from '@/types/property-listing';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { usePagination, usePageNumbers } from '@/hooks/use-pagination';
import ErrorBoundary from '../shared/error-boundary';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
} from '../ui/pagination';
import { sortOptions } from '@/lib/shared/data';
import { getCurrentSortLabel } from '@/lib/utils';
import PropertyListingCard from './property-listing-card';

const DEFAULT_ITEMS_PER_PAGE = 12;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PropertyListings({
  properties = [],
  isLoading = false,
  error = null,
  itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
}: PropertyListingsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const sort = searchParams.get('sort') || 'createdAt-desc';

  const currentPage = Number(searchParams.get('page')) || 1;

  const paginationInfo = usePagination({
    totalItems: properties.length,
    itemsPerPage,
    currentPage,
  });

  const pageNumbers = usePageNumbers(paginationInfo);

  const createQueryString = useCallback(
    (params: Record<string, string>) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      Object.entries(params).forEach(([key, value]) => {
        newSearchParams.set(key, value);
      });
      return newSearchParams.toString();
    },
    [searchParams]
  );

  const scrollToListings = useCallback(() => {
    const listingsContainer = document.querySelector('[aria-label="Property listings"]');
    const scrollOptions = {
      top: listingsContainer ? undefined : 0,
      behavior: 'smooth' as const,
      block: 'start' as const,
    };

    return new Promise<void>(resolve => {
      if ('scrollBehavior' in document.documentElement.style) {
        listingsContainer?.scrollIntoView(scrollOptions) ?? window.scrollTo(scrollOptions);
        setTimeout(resolve, 500); // Fallback for browsers without scrollend
      } else {
        // Instant scroll for browsers without smooth scroll support
        listingsContainer?.scrollIntoView({ block: 'start' }) ?? window.scrollTo({ top: 0 });
        resolve();
      }
    });
  }, []);

  const handlePageChange = useCallback(
    async (page: number) => {
      router.push(`?${createQueryString({ page: page.toString() })}`);
      await scrollToListings();
    },
    [router, createQueryString, scrollToListings]
  );

  const handleSortChange = useCallback(
    (option: SortOption) => {
      const sortString = `${option.field}-${option.direction}`;
      router.push(`?${createQueryString({ sort: sortString, page: '1' })}`);
    },
    [router, createQueryString]
  );

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Properties</h2>
        <p className="text-neutral-darkGray">{error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-6 py-8 px-12 mt-3 mb-6">
        {Array.from({ length: itemsPerPage }, (_, index) => (
          <div key={index} className="animate-pulse">
            <div className="h-[336px] bg-neutral-darkGray rounded" />
            <div className="space-y-2 mt-7 mb-4">
              <div className="h-6 bg-black rounded w-3/4" />
              <div className="h-4 bg-black rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const { startIndex, endIndex, totalItems } = paginationInfo;
  const currentProperties = properties.slice(startIndex, endIndex);
  return (
    <section aria-label="Property listings" className="mb-24">
      <div className="bg-neutral-lightGray flex items-center justify-between px-12 py-7">
        <p className="font-sans text-h4 font-medium">
          Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} results
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            Sort by {sort && `: ${getCurrentSortLabel(sort)}`}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sortOptions.map(option => (
              <DropdownMenuItem
                key={`${option.value.field}-${option.value.direction}`}
                onClick={() => handleSortChange(option.value)}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <m.div
            key={currentPage}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-12 mt-3 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {currentProperties.map((property, index) => (
              <PropertyListingCard
                key={property.id}
                property={property}
                priority={index < 6} // Only prioritize loading for above-the-fold images
              />
            ))}
          </m.div>
        </AnimatePresence>
      </ErrorBoundary>

      {totalItems > itemsPerPage && (
        <div className="py-4 grid place-items-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage > 1) handlePageChange(currentPage - 1);
                  }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>

              {pageNumbers.map((pageNumber, index) => (
                <PaginationItem key={index}>
                  {pageNumber === '...' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        handlePageChange(pageNumber as number);
                      }}
                      isActive={currentPage === pageNumber}
                      aria-current={currentPage === pageNumber ? 'page' : undefined}
                    >
                      {pageNumber}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage < paginationInfo.totalPages) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                  className={
                    currentPage === paginationInfo.totalPages
                      ? 'pointer-events-none opacity-50'
                      : ''
                  }
                  aria-disabled={currentPage === paginationInfo.totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </section>
  );
}
