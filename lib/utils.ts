import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

import { SortOption } from '@/types/property-listing';
import { sortOptions } from './shared/data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentSortLabel(sort: string): string {
  const [field, direction] = sort.split('-') as [SortOption['field'], SortOption['direction']];
  const currentSort = sortOptions.find(
    option => option.value.field === field && option.value.direction === direction
  );
  return currentSort?.label || 'Sort by';
}
