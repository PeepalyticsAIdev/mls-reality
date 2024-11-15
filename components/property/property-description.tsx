import {
  Contact,
  LucideArrowRight,
  LucideBath,
  LucideBedDouble,
  LucideLandPlot,
  LucideSquareDashedBottomCode,
} from 'lucide-react';
import React from 'react';
import Agent from './agent';
import AgentContact from './agent-contact';
import { Button } from '../ui/button';
import Link from 'next/link';
import ContactForm from './contact-form';
import MapComponent from '../map';

type Property = {
  property: string;
  bedroom: string;
  bathroom: string;
  land_size: string;
  property_address: string;
  map_lat: number;
  map_lng: number;
};

const PropertyDescription = ({
  property,
  bedroom,
  bathroom,
  land_size,
  property_address,
  map_lat,
  map_lng,
}: Property) => {
  return (
    <main className="grid grid-cols-2 max-sm:grid-cols-1 gap-3">
      {/* 1st grid col  */}
      <section className="space-y-5 text-gray-500 max-xs:text-xs">
        {/* property title  */}
        <h2 className="text-gray-700 font-semibold text-3xl">{property}</h2>
        {/* bedroom, bathrooms and land plot  */}
        <div className="flex gap-5 font-semibold w-full">
          <p className="flex gap-2 items-center">
            <LucideBedDouble className="w-16" />
            <span>{bedroom} Bedrooms</span>
          </p>
          <p className="flex gap-2 items-center">
            <LucideBath className="w-16" />
            <span>{bathroom} Bath</span>
          </p>
          <p className="flex gap-2 items-center">
            <LucideLandPlot className="w-16" />
            <span>{land_size} sq.ft</span>
          </p>
        </div>

        {/* about the property */}
        <div className="space-y-3">
          <h4 className="text-gray-700 font-semibold text-xl">About the property</h4>
          <p>
            This 2 bedroom, 2 bathroom cottage is perched on a half acre of land high on the
            Southern slopes of the 3,232 foot high Nevis Peak. The elevation of the home is
            approximately 1,200 feet above sea level, providing a cool climate with no need for air
            conditioning. The views from this high perch are spectacular with the islands of
            Antigua, Redonda and Montserrat visible over the Caribbean Sea. The garden is very lush
            with flowering shrubs and fruit trees including delicious mangoes and coconuts. The
            neighborhood is extremely quiet offering the serene sound of nature with the absence of
            traffic noise. This property is perfect for persons wanting seclusion and tranquility.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-gray-700 font-semibold text-xl">Amenities</h4>
          <ul className="list-disc px-7">
            <li>
              Gourmet Kitchen: Equipped with top-of-the-line appliances, custom cabinetry, and
              spacious island.
            </li>
            <li>
              Private Outdoor Spaces: Beautifully landscaped gardens, private pool, and outdoor
              lounge areas.
            </li>
            <li>
              Home Office: Dedicated workspace with high-speed internet and ergonomic furnishings
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-gray-700 font-semibold text-xl">Location</h4>
          {/* google map here */}

          <MapComponent 
          property_address={property_address}
          map_lat={map_lat}
          map_lng={map_lng}
          
          />
        </div>
      </section>

      {/* 2nd grid col  */}
      <section className="space-y-5 bg-gray-50 text-gray-500 rounded-lg p-3">
        <div className="flex">
          <div>
            <p className="my-2 max-xs:text-xs text-base">Price</p>
            {/* price tag  */}
            <h2 className="text-gray-700 font-semibold text-3xl">
              $650,000
              <span className="text-lg px-2">USD</span>
            </h2>

            <p className="text-xl my-2">Residential Property</p>
          </div>

          {/* badge here  */}
        </div>

        {/* listing agent profile  */}
        <div className="space-y-3">
          <h4 className="my-2">Listing Agent</h4>

          <Agent />
          <AgentContact />
          <Link href="/">
            <Button className="my-5 max-sm:text-xs max-sm:px-2 sm:h-11 text-white font-bold rounded-full px-5">
              See all listings from this agent
              <LucideArrowRight
                style={{
                  width: '20px',
                  height: '20px',
                }}
              />
            </Button>
          </Link>
        </div>

        <ContactForm />
      </section>
    </main>
  );
};

export default PropertyDescription;
