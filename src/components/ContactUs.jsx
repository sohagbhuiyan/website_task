import React from "react";
import { cont } from "../Utils/images";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#f5ded0] ">
      
      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-lg bg-white  overflow-hidden">

        <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We are here to meet any business need and to promote your company online!
          </p>
          <hr className="my-4  border-gray-300" />
          <p className="mb-2">
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:12322525522" className="underline">
              1 (232) 252 55 22
            </a>
          </p>
          <p className="mb-2">
            <span className="font-bold">Location:</span> 75 Street Sample, WI 63025
          </p>
          <p className="mb-4">
            <span className="font-bold">Mail:</span>{" "}
            <a href="mailto:template@sample.com" className="underline">
              template@sample.com
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Image from <a href="https://www.freepik.com" className="underline">Freepik</a>
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={cont}
            alt="Desk Setup"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
