

import React from "react";
import UniqueStyle from "../assets/images/uniquestyle.webp";

const Uniquestyle = () => {
  return (
    <div>
      <div
        className="section h-60vh"
        style={{
          backgroundImage: `url(${UniqueStyle})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto h-full flex items-center px-4 md:px-8 lg:px-11">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#222222]">
              The unique make that <br className="hidden md:block" /> fits your style
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#555555] py-4 md:py-6">
              Always look for in a world-class diamond!
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                className="border-black border-2 px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-3 
                hover:bg-black hover:text-white transition
                duration-300 ease-in-out"
              >
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uniquestyle;
