import React from "react";
import { bgmock, mock } from "../Utils/images";

const MockUpSection = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen py-6 md:py-14 p-4 flex flex-col md:flex-row items-start justify-center gap-6"
      style={{ backgroundImage: `url(${bgmock})` }}>

        <div className="w-full md:w-1/2 flex flex-col items-start justify-start py-7 space-y-4">
        <img
            src={mock}
            alt="Mockup"
            className="w-48 sm:w-60 md:w-72 shadow-lg "
        />

        <div className="bg-white bg-opacity-90 w-48 sm:w-60 md:w-72 items-center text-center -ml-4 md:-ml-10 p-10 shadow-md ">
            <h1 className="text-lg sm:text-xl font-semibold">MOCKUP</h1>
            <p className="text-sm sm:text-base mt-1">READY TO USE</p>
        </div>
        </div>

        <div className="w-1/2 md:w-1/4 mx-auto flex flex-col justify-center space-y-4">
        <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-semibold text-lg">Branding strategy</h3>
            <p className="text-sm mt-2">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Excepteur sint occaecat cupidatat
            non proident.
            </p>
            <p className="text-sm mt-2 text-blue-600">
            Image from <a href="#" className="underline">Freepik</a>
            </p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-semibold text-lg">Designing logos</h3>
            <p className="text-sm mt-2">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Excepteur sint occaecat cupidatat
            non proident.
            </p>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
            <h3 className="font-semibold text-lg">Brand identity</h3>
            <p className="text-sm mt-2">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Excepteur sint occaecat cupidatat
            non proident.
            </p>
        </div>
        </div>

    </div>
  );
};

export default MockUpSection;
