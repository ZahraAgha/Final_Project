import React from "react";
import Lifestyle from "../assets/images/lifecollection.webp";
import Elegant from "../assets/images/elegantfashion.webp";

const Fashion = () => {
  return (
    <div className="mt-24">
      <section className="container mx-auto flex  w-[90%]  ">
        <div className="w-[50%]  flex flex-col items-center">
          <div>
            <img src={Lifestyle} alt="LifeStyle Collection" />
          </div>
          <div className="text-center">
            <h1 className="text-[50px] text-[#222222]">
              <span>Dynamic</span>
              <br />
              <span>Lifestyle Collection</span>
            </h1>
            <p className="text-2xl text-[#555555] font-light py-4">
              Unique jewels for everyone!
            </p>
            <button
              className="border-black border-2 px-12 py-3 
             hover:bg-black hover:text-white transition
              duration-300 ease-in-out"
            >
              Shop Collection
            </button>
          </div>
        </div>
        <div className="w-[50%]  flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-[50px] text-[#222222]">
              <span>Perfect Match</span>
              <br />
              <span>for Elegant Fashion</span>
            </h1>
            <p className="text-2xl text-[#555555] font-light py-4">
              Catch the highlight in the roof
            </p>
            <button
              className="border-black border-2 px-12 py-3 
             hover:bg-black hover:text-white transition
              duration-300 ease-in-out mb-10"
            >
              Shop Collection
            </button>
          </div>
          <div>
            <img className="" src={Elegant} alt="LifeStyle Collection" />
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Fashion;
