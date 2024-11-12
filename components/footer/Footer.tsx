'use client'

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-lightGray text-neutral-darkGray py-10 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-4">Area Real Estate</h4>
          <ul className="space-y-2">
            <li><Link href="/sales">Sales</Link></li>
            <li><Link href="/rentals">Rentals</Link></li>
            <li><Link href="/previews">Previews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">MLS Reality Info</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/how-to-buy">How to buy</Link></li>
            <li><Link href="/citizenship-by-investment">Citizenship by investment</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/tourism-guide">Tourism Guide</Link></li>
            <li><Link href="/links">Links</Link></li>
            <li><Link href="/sitemap.xml">XML Sitemap</Link></li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold mb-4">MLS Reality Socials</h4>
          <ul className="space-y-2">
            <li><Link href="https://facebook.com">Facebook</Link></li>
            <li><Link href="https://twitter.com/johnyearwood">John Yearwood on Twitter</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p>Oualie Bay, Nevis, West Indies</p>
          <p>Tel: <a href="tel:+18694699403">(869) 469-9403</a></p>
          <p><Link href="/contact">Email & Contact us here</Link></p>
        </div>
      </div>

      <div className="border-t border-neutral-gray mt-10 pt-4 text-center flex justify-between items-center">
      <h1 className='text-primary-dark'>MLS REALITY</h1>
        <p>MLS REALITY St Kitts and Nevis Realty | Copyright © 2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
