import React from "react";
import { MdOutlineColorLens } from "react-icons/md";
import { PiHeadCircuitLight } from "react-icons/pi";
import { LiaBullhornSolid } from "react-icons/lia";
import { BiCodeBlock } from "react-icons/bi";


const features = [
  {
    icon: <PiHeadCircuitLight size={40} />,
    title: "STRATEGY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    bg: "transparent",
    textColor: "text-gray-700",
  },
  {
    icon: <LiaBullhornSolid className="bg-yellow-400 p-2 rounded-full" size={50} />,
    title: "BRANDING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    bg: "bg-white",
    textColor: "text-gray-700",
  },
  {
    icon: <BiCodeBlock size={40} />,
    title: "DEVELOPMENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    bg: "transparent",
    textColor: "text-gray-700",
  },
  {
    icon: <MdOutlineColorLens className="text-gray-600" size={40} />,
    title: "WEB DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    bg: "bg-[#f5a623]",
    textColor: "text-white",
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-[#d8c8bc] px-4 py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Epic design and engineering
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl py-4 mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className={`p-6 ${item.bg} ${item.textColor} text-center transition`}
          >
            <div className="flex justify-center py-4  bg-white w-15 h-15 items-center rounded-full mx-auto mb-4">{item.icon}</div>
            <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
            <p className="text-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
