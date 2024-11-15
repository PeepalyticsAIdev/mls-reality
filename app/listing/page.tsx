'use client';

import { HomeIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Property, SortOption } from '@/types/property-listing';
import PropertyFilter from '@/components/property/property-filter';
import PropertyListings from '@/components/property-listing/property-lisiting';
import { generateDeterministicProperties } from '@/lib/seeders/property-listing-seed';

/* Generate dummy data from product lisiting seed  */
const PROPERTY_SEED = 12345;
export const properties: Property[] = generateDeterministicProperties(100, PROPERTY_SEED);

const ListingPage = () => {
  const searchParams = useSearchParams();

  const sort = searchParams.get('sort') || 'createdAt-desc';
  const [sortField, sortDirection] = sort.split('-') as [
    SortOption['field'],
    SortOption['direction']
  ];

  // Sort properties based on URL params
  const sortedProperties = [...properties].sort((a, b) => {
    const multiplier = sortDirection === 'asc' ? 1 : -1;
    return multiplier * (a[sortField] > b[sortField] ? 1 : -1);
  });

  return (
    <main>
      <section
        aria-label="Filter available properties"
        style={{ backgroundImage: 'url(/images/listing/listing-01.webp)' }}
        className="text-center h-[460px] bg-gray-500 text-white grid place-items-center 
        bg-cover bg-center bg-no-repeat bg-gradient-to-b from-black/0 to-black/60"
      >
        <div className="max-w-[80%] text-center">
          <span className="flex w-fit mx-auto p-2 rounded-full gap-3 bg-white/20">
            <HomeIcon />
            <p className="font-sans">All Properties</p>
          </span>

          <h1 className="text-display font-medium font-lora mt-6 mb-8">
            Check on all properties <br /> we have available
          </h1>

          <PropertyFilter type="rect" />
        </div>
      </section>

      <PropertyListings properties={sortedProperties} />

      <section
        style={{ backgroundImage: 'url(/images/listing/listing-02.webp)' }}
        aria-label="More information banner"
        className="h-[480px] text-white flex items-center bg-cover bg-center bg-no-repeat bg-gradient-to-r from-black/0 to-black/70"
      >
        <div className="max-w-[630px] ml-28">
          <h3 className="text-display font-medium font-lora">
            Need more information <br />
            concerning our properties?
          </h3>

          <p className="mt-4 mb-6 text-h4 font-normal">
            If you would like more information on one of our properties please click the button
            below and one of our staff members will get in touch with you as soon as possible.
          </p>

          <Button className="rounded-full h-auto py-2.5 px-6 text-body bg-white text-neutral-darkGray font-bold">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ListingPage;
