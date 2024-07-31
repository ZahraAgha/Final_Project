
import React, { useEffect, useState } from "react";
import Pandora from "../assets/images/pannecklace.webp";
import Ring from "../assets/images/ringcategory.jpg";
import RosePandora from "../assets/images/rosepanbracelt.webp";
import SilverEarring from "../assets/images/silverear.jpg";
import RoseProduct from "../assets/images/rosepr.jpg";
import RingDiamond from "../assets/images/diamondring.jpg";

const CategoryProduct = ({ setSelectedCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5555/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const categoryImages = {
    ring: Ring,
    necklace: Pandora,
    bracelet: RosePandora,
    earrings: SilverEarring,
    'charm & dangles': RoseProduct,
    'gift ideas': RingDiamond,
  };

  const handleCategoryClick = (slug) => {
    setSelectedCategories([encodeURIComponent(slug)]);
  };

  return (
    <section className="container mx-auto py-7 mb-8">
      <div className="flex flex-wrap justify-center md:justify-between cursor-pointer gap-4 md:gap-6">
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex flex-col items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[180px] h-auto gap-3"
            onClick={() => handleCategoryClick(category.slug)}
          >
            <img 
              src={categoryImages[category.slug]} 
              alt={category.name} 
              className="rounded-full w-full h-auto object-cover" 
            />
            <h1 className="text-center text-xs sm:text-sm md:text-base mt-2">{category.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryProduct;
