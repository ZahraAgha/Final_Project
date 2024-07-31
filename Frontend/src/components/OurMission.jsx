
import React from "react";
import Hands from "../assets/images/abouthands.webp";

const OurMission = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <section className="w-full grid grid-cols-2">
        {/* <div className="w-1/2 flex items-center justify-center bg-[#F5F5F5]"> */}
          <img
            src={Hands}
            alt="Hands"
            className="object-cover w-full h-[540px]"
          />
        {/* </div> */}
        <div className="w-1/2 flex flex-col justify-center items-start px-8  bg-[#F5F5F5] ">
          <div className="mb-8 ">
            <h1 className="text-3xl mb-4 text-[#111111] font-normal">
              Our Mission
            </h1>
            <p>
              By in entirely securing suitable graceful at families improved.
              Zealously few furniture repulsive was agreeable consisted
              difficult. Collected breakfast estimable questions in to favourite
              it. Known he place worth words it as to. Spoke now noise off smart
              her ready.
            </p>
          </div>
          <div>
            <h1 className="text-3xl mb-4 text-[#111111] font-normal">
              Our Vision
            </h1>
            <p className="text-[18px] text-[#555555]">
              We were supposed to head to California this weekend but last
              minute had to cancel and I’m so bummed I was so ready for the
              beach!! These pictures were from last weekend when the weather.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
