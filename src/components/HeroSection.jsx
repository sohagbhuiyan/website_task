import React from "react";
import { doted, hero } from "../Utils/images";

const HeroSection = () => {
  return (
    <div className="bg-[#d8c8bc] px-4 py-16 md:py-50 overflow-hidden relative">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-5 items-center relative">
        {/* Left Content */}
        <div className="relative bg-white p-6 max-w-lg md:top-15 shadow-md z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">We Create Websites</h2>
          <p className="text-gray-700 mb-6 max-w-64 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Image from{" "}
            <a href="https://www.freepik.com" className="underline">
              Freepik
            </a>
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            View Portfolio
          </button>
        </div>

        {/* Right Side with Layered Images */}
        <div className="relative w-full md:-ml-40 md:-top-20 max-w-[400px] mx-auto z-10">
          {/* Yellow background (bottom-most layer) */}
          <div className="absolute -top-8 md:-top-20 left-18 w-[100%] h-[160%] bg-[#f5a623] rounded-md z-[-30]"></div>

          {/* Dotted background (middle layer) */}
          <div
            className="absolute top-15 -left-8 md:-left-10 w-[100%] h-[100%] bg-repeat opacity-50 z-[-20]"
            style={{ backgroundImage: `url(${doted})`, backgroundSize: 'contain' }}
          ></div>

          {/* Hero Image (top layer) */}
          <img
            src={hero}
            alt="hero"
            className="relative ml-20 md:ml-0 z-10 w-full h-auto object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
