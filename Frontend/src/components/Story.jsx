

import React from "react";
import story from "../assets/images/moreinfo.webp";

const Story = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 w-[90%] md:w-[80%] px-4 mt-8">
      <div className="w-full md:w-[50%] cursor-pointer overflow-hidden">
        <img
          src={story}
          alt="Jewellry set"
          className="transform transition duration-300 ease-in-out hover:scale-110 w-full"
        />
      </div>
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
        <h1 className="text-[#222222] text-[28px] md:text-[40px] lg:text-[50px] text-center md:text-left">
          Designed for Those <br />
          Who Evade Limits
        </h1>
        <p className="py-4 text-[16px] md:text-[18px] lg:text-[20px] text-[#555555] w-full md:w-[80%] text-center md:text-left">
          Attention to details is always a good feature. We couldn’t think of
          any better present for our 5th anniversary than a pair of exclusive
          watches from the Lawson collection. Every time I look at my watch, I
          think of her lifestyle move.
        </p>
        <button
          className="border-2 border-black border-solid rounded-sm px-8 md:px-12 py-2 md:py-3 hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Read Our Story
        </button>
      </div>
    </div>
  );
};

export default Story;

