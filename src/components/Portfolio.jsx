import React from 'react';
import { corporate, digital, mobile, mobile1, responsive, web } from '../Utils/images';

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Portfolio</h1>
      <p className="text-center px-10 mb-8 text-gray-400">
        Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in  <br /> cursus turpis massa tincidunt. 
       Pellentesque habitant morbi tristique senectus et netus
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Website Design */}
        <div className="bg-white text-gray-700 shadow-lg">
          <img src={web} alt="Website Design" className="w-full h-48 object-cover "/>
          <h3 className="text-lg m-4 text-center">Website Design</h3>
        </div>
        {/* Mobile Application */}
        <div className="bg-white text-gray-700  shadow-lg">
          <img src={mobile} alt="Mobile Application" className="w-full h-48 object-cover "/>
          <h3 className="text-lg m-4  text-center">Mobile Application</h3>
        </div>
        {/* Corporate Design */}
        <div className="bg-white text-gray-700  shadow-lg">
          <img src={corporate} alt="Corporate Design" className="w-full h-48 object-cover "/>
          <h3 className="text-lg m-4 text-center">Corporate Design</h3>
        </div>
        {/* Mobile Application 2 */}
        <div className="bg-white text-gray-700  shadow-lg">
          <img src={mobile1} alt="Mobile Application" className="w-full h-48 object-cover "/>
          <h3 className="text-lg m-4 text-center">Mobile Application</h3>
        </div>
        {/* Responsive Design */}
        <div className="bg-white text-gray-700   shadow-lg">
          <img src={responsive} alt="Responsive Design" className="w-full h-48 object-cover "/>
          <h3 className="text-lg m-4  text-center">Responsive Design</h3>
        </div>
        {/* Digital Product */}
        <div className="bg-white text-gray-700  shadow-lg">
          <img src={digital} alt="Digital Product" className="w-full h-48 object-cover"/>
          <h3 className="text-lg m-4 text-center">Digital Product</h3>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-500">Images from <a href="https://www.freepik.com" className="underline">Freepik</a></p>
    </div>
  );
};

export default Portfolio;
