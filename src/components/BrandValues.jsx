import React from 'react';
import { bvv1, bvv2, bvv3 } from '../Utils/images';

const BrandValues = () => {
  return (
    <div className="relative bg-[#d8c8bc] min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 md:px-10">
      {/* Image Grid */}
      <div className="grid grid-cols-2 items-center gap-4 max-w-5xl w-full">
        {/* Top Left Image */}
        <img
          src={bvv1}
          alt="Woman writing"
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover justify-self-end transition-all duration-300"
        />
        {/* Right Image */}
        <img
          src={bvv2}
          alt="Desk setup"
          className="row-span-2 w-full h-44 sm:h-64 md:h-full object-cover transition-all duration-300"
        />
        {/* Bottom Left Image */}
        <img
          src={bvv3}
          alt="Laptop design"
          className="w-full h-36 sm:h-48 md:h-64 object-cover justify-self-end transition-all duration-300"
        />
      </div>

      {/* Overlay Card */}
      <div className="absolute bg-black bg-opacity-90 text-white p-3 md:px-4 md:py-5 sm:px-6 sm:py-6 md:p-10 max-w-36 md:max-w-md text-center shadow-lg transition-all duration-300">
        <h2 className="text-md sm:text-2xl font-bold mb-2 sm:mb-3">Brand Values</h2>
        <p className="text-xs sm:text-sm mb-2 sm:mb-3">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla nunc justo sagittis suscipit ultrices.
        </p>
        <p className="text-[10px] sm:text-xs text-gray-400 mb-3">
          Images from <a href="https://www.freepik.com" className="underline">Freepik</a>
        </p>
        <button className="bg-black text-white  px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium border rounded hover:bg-gray-600 transition">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default BrandValues;
