import React from "react";
import { doted, hero } from "../Utils/images";

const HeroSection = () => {
  return (
    <div className="bg-[#d8c8bc] px-4 py-16 md:py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative">
        
        {/* Left Text Content */}
        <div className="relative bg-white p-6 shadow-md z-20 md:ml-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">We Create Websites</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Image from <a href="https://www.freepik.com" className="underline">Freepik</a>
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            View Portfolio
          </button>
        </div>

        {/* Right Image + Overlapping Boxes */}
        <div className="relative w-full max-w-[480px] mx-auto md:-ml-20 z-10">

          {/* Orange Box */}
          <div className="absolute w-full h-full top-6 left-6 bg-[#f5a623] z-0"></div>

          {/* Doted Background */}
          <div
            className="absolute w-[110%] h-[110%] -top-14 -left-20 z-[-10] opacity-60 bg-repeat"
            style={{ backgroundImage: `url(${doted})`, backgroundSize: 'contain' }}
          ></div>

          {/* Main Image */}
          <img
            src={hero}
            alt="hero"
            className="relative z-10 w-full h-auto object-contain shadow-xl rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
