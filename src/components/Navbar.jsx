import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          logo
        </div>

        {/* Menu Icon (for mobile) */}
        <button className="text-2xl text-gray-800">
          <FiMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
