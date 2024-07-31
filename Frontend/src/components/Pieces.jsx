

import React from "react";
import Shape1 from "../assets/images/shape1.webp";
import Shape2 from "../assets/images/shape2.webp";
import Shape3 from "../assets/images/shape3.webp";

const Pieces = () => {
  return (
    <div>
      <section className="pt-11 bg-white pb-6">
        <div className="flex flex-col justify-center items-center pb-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Refresh Your Look With These</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Quality Pieces</h2>
        </div>
        <div className="flex flex-wrap justify-evenly container mx-auto">
          <div className="flex flex-col items-center m-4 w-full sm:w-1/2 lg:w-1/3">
            <img src={Shape1} alt="shape" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#222222] py-3">Artistic</h1>
            <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-[#555555] text-center">
              Get complimentary ground shipping on every order. Don't love it? Send it back, on us.
            </p>
          </div>
          <div className="flex flex-col items-center m-4 w-full sm:w-1/2 lg:w-1/3">
            <img src={Shape2} alt="shape" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#222222] py-3">Unique</h1>
            <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-[#555555] text-center">
              Free returns within 10 days, please make sure the items are in undamaged condition.
            </p>
          </div>
          <div className="flex flex-col items-center m-4 w-full sm:w-1/2 lg:w-1/3">
            <img src={Shape3} alt="shape" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#222222] py-3">Useful</h1>
            <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-[#555555] text-center">
              We support customers 24/7, send questions we will solve for you immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pieces;
