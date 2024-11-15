import React, { useEffect, useRef } from 'react';
import L, { Map } from 'leaflet'; // Import Map type from Leaflet
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { LucideMapPin } from 'lucide-react';

type MapProps = {
  property_address: string;
  map_lat: number;
  map_lng: number;
};

export default function MapComponent({ property_address, map_lat, map_lng }: MapProps) {
  const mapRef = useRef<Map | null>(null); // Explicitly type mapRef

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only if it hasn't been initialized yet
      mapRef.current = L.map('map').setView([map_lat, map_lng], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      L.marker([map_lat, map_lng])
        .addTo(mapRef.current)
        // .bindPopup("A marker!")
        .openPopup();
    }

    return () => {
      // Cleanup function to remove the map instance
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null; // Reset the ref
      }
    };
  }, []);

  return (
    <section>
      <div id="map" className="rounded-lg" style={{ height: '500px', width: '100%' }} />
      <div className="text-gray-500 max-xs:text-sm text-xl flex gap-2 items-end">
        <LucideMapPin className="max-xs:w-5" />
        <p>{property_address}</p>
      </div>
    </section>
  );
}
