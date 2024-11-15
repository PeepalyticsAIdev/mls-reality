export interface Property {
  id: string;
  title: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  price: number;
  location: {
    city: string;
    state: string;
    country: string;
  };
  features: {
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
  };
  images: {
    url: string;
    alt: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface PropertyListingsProps {
  properties?: Property[];
  isLoading?: boolean;
  error?: Error | null;
  itemsPerPage?: number;
}

export type SortOption = {
  field: 'price' | 'createdAt';
  direction: 'asc' | 'desc';
};

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalItems: number;
}
