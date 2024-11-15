'use client';

import PropertyDescription from '@/components/property/property-description';
import React from 'react';

type Property = {
    property: string;
    bedroom: string;
    bathroom: string;
    land_size: string;
    property_address: string;
    map_lat: number;
    map_lng: number;
  };
  

const PropertyDetails = () => {
  return (
    <div className="p-6">
      <div className="p-6">
      <PropertyDescription
          property={"Mansion"}
          bedroom={"3"}
          bathroom={"3"}
          land_size={"1619"}
          property_address={"Address"}
          map_lat={17.1433015}
          map_lng={-62.571493}
        />
      </div>
    </div>
  );
};

export default PropertyDetails;
