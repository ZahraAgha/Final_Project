import React from "react";
import Post1 from "../assets/images/post1.avif";
import Post2 from "../assets/images/post2.avif";
import Post3 from "../assets/images/post3.avif";
import Post4 from "../assets/images/post4.avif";
import Post5 from "../assets/images/post5.webp";
import Post6 from "../assets/images/post6.avif";
import { SlSocialInstagram } from "react-icons/sl";

const Instagram = () => {
  return (
    <div className="relative">
      <section className="flex flex-wrap justify-between w-[100%] pt-11 ">
        <div className="w-[16%]">
          <img
            src={Post1}
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[16%]">
          <img
            src={Post2}
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[16%]">
          <img
            src={Post3}
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[16%]">
          <img
            src={Post4}
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[16%]">
          <img
            src={Post5}
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[16%]">
          <img
            src={Post6}
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <div className="absolute top-1/2 left-1/2 z-[3] transform -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center bg-white bg-opacity-75 p-4">
        <a
          href="https://www.instagram.com/ersky"
          className="text-center text-gray-800 flex gap-2 flex-col items-center"
        >
          <SlSocialInstagram size={24} />
          <span className="block text-lg">Follow Us @ersky</span>
        </a>
      </div>
    </div>
  );
};

export default Instagram;
