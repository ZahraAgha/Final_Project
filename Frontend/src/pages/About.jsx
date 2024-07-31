import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import about1 from "../assets/images/aboutus1.webp";
import about2 from "../assets/images/aboutus2.webp";
import signiture from "../assets/images/alk_name.webp";
import OurMission from "../components/OurMission";
import Responsible from "../components/Responsible";
import LeaderCompany from "../components/LeaderCompany";

const About = () => {
  return (
    <div>
      <section className="container mx-auto">
        <nav>
          <ol className="flex items-center space-x-2">
            <li className="text-[#757575]  flex items-center">
              <NavLink to="/home">Home</NavLink>
              <span className="mx-2">
                <FaAngleRight />
              </span>
            </li>
            <li className="text-[#757575] flex items-center">
              <NavLink to="/about">About Us</NavLink>
              <span className="mx-2">
                <FaAngleRight />
              </span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col justify-center items-center gap-4 mt-9 ">
          <h1 className="text-5xl text-[#222222]">About Our Online Store</h1>
          <p className="text-xl text-[#555555]">
            Alukas providing rare & beautiful items sourced both locally &
            globally.
          </p>
        </div>
        <div className="flex justify-center items-center mt-11 pt-3">
          <div>
            <img src={about1} alt="box_jewellery" />
          </div>
          <div>
            <img src={about2} alt="rings" />
          </div>
        </div>

        <div className="flex container mx-auto  justify-center items-center pt-10 mt-8">
          <div className="flex w-[40%]">
            <h2 className="text-4xl font-normal text-[#222222] ">Our Story</h2>
            <span className="border-b-2 border-solid border-[#222222] max-w-36 w-full ml-4  mb-3.5"></span>
          </div>
          <div className="w-[40%]">
            <h1 className="text-xl text-[#222222]">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black has been the industry’s standard dummy
              text ever since the 1500s.
            </h1>
            <p className="text-base text-[#555555] py-5 ">
              Wrote water woman of heart it total other. By in entirely securing
              suitable graceful at families improved. Zealously few furniture
              repulsive was agreeable consisted difficult. Collected breakfast
              estimable questions in to favourite it. Known he place worth words
              it as to. Spoke now noise off smart her ready.
            </p>
            <p className="text-base text-[#555555] pt-11 mr-6 pb-4">
              To shewing another demands to. Marianne property cheerful informed
              at striking at. Clothes parlors however by cottage on. In views it
              or meant drift to. Be concern parlors settled or do shyness
              address. Remainder northward performed out for moonlight. Yet late
              add name was rent park from rich.
            </p>
            <div>
              <img src={signiture} alt="signiture" />
            </div>
          </div>
        </div>
      </section>
      <OurMission />
      <Responsible />
      <LeaderCompany />
    </div>
  );
};

export default About;
