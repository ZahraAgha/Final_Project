
import React, { useState } from "react";
import Productimg from "../assets/images/productback.webp";
import CategoryProduct from "../components/CategoryProduct";
import LeftSideBar from "../components/Leftsidebar/LeftSideBar";
import RightCards from "../components/RightCards";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <>
      <section
        className="h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Productimg})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl text-black">Products</h1>
          <p className="text-gray-500">
            Home &gt; <span className="text-black">Products</span>
          </p>
        </div>
      </section>
      <CategoryProduct setSelectedCategories={setSelectedCategories} />
      <div className="container flex flex-col lg:flex-row justify-between mx-auto px-4 lg:px-0">
        <div className="w-full lg:w-[19%] pt-5 mt-11">
          <LeftSideBar setSelectedCategories={setSelectedCategories} />
        </div>
        <div className="w-full lg:w-[79%] pt-5 mt-11">
          <RightCards selectedCategories={selectedCategories} />
        </div>
      </div>
    </>
  );
};

export default Products;
