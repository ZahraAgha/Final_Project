
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Blogimg1 from "../assets/images/Bluegirl.webp";
import Blog2 from "../assets/images/bloggreen.webp";
import Blog3 from "../assets/images/bloggreen2.webp";

const Blog = () => {
  return (
    <div>
      <section>
        <nav className="flex justify-center items-center flex-col">
          <h1>News</h1>
          <ol className="flex items-center space-x-2">
            <li className="text-[#757575]  flex items-center">
              <NavLink to="/home">Home</NavLink>
              <span className="mx-2">
                <FaAngleRight />
              </span>
            </li>
            <li className="text-[#757575] flex items-center">
              <NavLink to="/blog">Blog</NavLink>
              <span className="mx-2">
                <FaAngleRight />
              </span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row w-full md:w-[80%] justify-center items-start mt-8 mx-auto container gap-10 px-4 md:px-0">
          <div className="w-full md:w-[24%] border p-4">
            <h2 className="text-xl font-bold mb-4">Popular Posts</h2>
            <div className="flex pb-4 mb-4 border-b">
              <div className="w-[89px] h-[80px] overflow-hidden cursor-pointer">
                <img
                  src={Blogimg1}
                  alt="Jewelry Horoscope Autumn"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="pl-4">
                <h3 className="font-semibold">Jewelry Horoscope Autumn</h3>
                <p className="text-gray-600">MAR 09 2024</p>
              </div>
            </div>
            <div className="flex pb-4 mb-4 border-b">
              <div className="w-[89px] h-[80px] overflow-hidden cursor-pointer">
                <img
                  src={Blog2}
                  alt="Jewelry Horoscope Autumn"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="pl-4">
                <h3 className="font-semibold">Horoscope Autumn</h3>
                <p className="text-gray-600">MAR 09 2024</p>
              </div>
            </div>
            <div className="flex pb-4 mb-4">
              <div className="w-[89px] h-[80px] overflow-hidden cursor-pointer">
                <img
                  src={Blog3}
                  alt="Jewelry Horoscope Autumn"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="pl-4">
                <h3 className="font-semibold">Jewelry Horoscope Autumn</h3>
                <p className="text-gray-600">MAR 09 2024</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[65%] ">
            <div className="flex flex-col md:flex-row mb-8 gap-4">
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden cursor-pointer">
                  <img
                    src={Blogimg1}
                    alt="Jewelry Horoscope Autumn"
                    className="w-full h-full mb-2 object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h2 className="text-2xl font-bold">Jewelry Horoscope Autumn</h2>
                <p className="text-gray-600">
                  POST BY ALUKAS SHOPIFY - MAR 09 2024
                </p>
                <p>
                  Oneself endless holiest society philosophy dept valuation
                  Contradicts gains nobless end lose preju dice battle hope the
                  battle philosophy Gains endless capitalize taking seamless
                  key...
                </p>
              </div>
              <div className="w-full md:w-1/2 ">
                <div className="overflow-hidden cursor-pointer">
                  <img
                    src={Blog3}
                    alt="The Wasteland Bracelet"
                    className="w-full h-full mb-2 object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h2 className="text-2xl font-bold">The Wasteland Bracelet</h2>
                <p className="text-gray-600">
                  POST BY ALUKAS SHOPIFY - MAR 06 2024
                </p>
                <p>
                  Oneself endless holiest society philosophy dept valuation
                  Contradicts gains nobless end lose preju dice battle hope the
                  battle philosophy Gains endless capitalize taking seamless
                  key...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
