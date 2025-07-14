import React from "react";
import { kyb2 } from "../Utils/images";


const Experience = () => {
  return (
    <div
      className="bg-yellow-400 bg-cover bg-center min-h-screen flex items-center justify-start p-4"
      style={{ backgroundImage: `url(${kyb2})` }}
    >
      <div className="bg-white bg-opacity-95 max-w-60 md:max-w-lg p-6 shadow-md ml-4 md:ml-20">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Crafting digital <br /> experiences
        </h1>
        <p className="text-gray-700 mb-2">
          Join the elite ranks of sustained value creators
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Image from{" "}
          <a href="#" className="underline text-blue-600">
            Freepik
          </a>
        </p>
        <button className="bg-black text-xs text-gray-400 px-5 py-2 rounded-lg hover:bg-gray-800 transition">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Experience;
