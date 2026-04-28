import React from 'react';
import Brands from './Brands';
import Socials from './Socials';

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-12 lg:px-24 py-10">

      {/* First Section */}
      <div>
        <Brands />
        <Socials />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h1 className="font-bold mb-3">Company</h1>
          <p className="cursor-pointer hover:text-red-400">About</p>
          <p className="cursor-pointer hover:text-red-400">Contact Us</p>
          <p className="cursor-pointer hover:text-red-400">FAQ</p>
          <p className="cursor-pointer hover:text-red-400">Platforms</p>
        </div>

        <div>
          <h1 className="font-bold mb-3">Products</h1>
          <p className="cursor-pointer hover:text-red-400">Learning Hub</p>
          <p className="cursor-pointer hover:text-red-400">Shop</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div>
        <h1 className="font-bold mb-3">Newsletter</h1>

        {/* Real Input */}
        <div className="flex items-center border border-stone-900 rounded-lg overflow-hidden max-w-full sm:max-w-[336px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 outline-none text-sm"
          />
          <button className="px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Subscribe
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Get a summary of what we have shipped, behind the scenes updates, and
          team picks. Unsubscribe at any time.
        </p>
      </div>

    </div>
  );
};