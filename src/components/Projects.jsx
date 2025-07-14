import React from "react";
import { kyb } from "../Utils/images";


const Projects = () => {
  return (
    <section className="bg-yellow-400 w-full py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={kyb}
            alt="Desk setup"
            className="max-w-full h-auto object-cover"
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Construction and <br /> renovation projects
          </h2>
          <p className="text-white text-sm sm:text-base">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="text-white text-xs sm:text-sm">
            Image from{" "}
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Freepik
            </a>
          </p>
          <button className="mt-2 border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-yellow-500 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
