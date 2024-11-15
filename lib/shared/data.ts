import { SortOption } from '@/types/property-listing';

// components/property-listing/property-lisiting.tsx
export const sortOptions: { label: string; value: SortOption }[] = [
  { label: 'Price: Low to High', value: { field: 'price', direction: 'asc' } },
  { label: 'Price: High to Low', value: { field: 'price', direction: 'desc' } },
  { label: 'Newest First', value: { field: 'createdAt', direction: 'desc' } },
];
