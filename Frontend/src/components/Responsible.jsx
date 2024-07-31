import React from "react";
import Love from "../assets/images/icon_love.avif";
import Rocket from "../assets/images/rocket.avif";
import Smile from "../assets/images/smile.png";

const Responsible = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[40px] text-[#222222] flex justify-center mt-7 ">
            Responsible and Sustainable Development
          </h1>
        </div>
        <div className="flex ">
          <div className="flex flex-col justify-center items-center">
            <img src={Smile} alt="Smile_Icon" className="w-10 h-10" />
            <h1 className="text-2xl text-[#222222] py-4">Happy Customer</h1>
            <p className="w-[65%]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Rocket} alt="Rocket_Icon" className="w-10 h-10" />
            <h1 className="text-2xl text-[#222222] py-4"> Free Shipping </h1>
            <p className="w-[65%]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Love} alt="Love_Icon" className="w-10 h-10" />
            <h1 className="text-2xl text-[#222222] py-4">Made With Love</h1>
            <p className="w-[65%]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Responsible;
