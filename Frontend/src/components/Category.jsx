

import React, { useState } from "react";
import Necklaces from "../assets/images/Necklaces.avif";
import Rings from "../assets/images/Rings.avif";
import Bracelets from "../assets/images/Bracelets.avif";
import Earnings from "../assets/images/Earnings.avif";
import Charm from "../assets/images/Charm-Dangles.avif";
import Gift from "../assets/images/Gift-Ideas.avif";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async (categorySlug) => {
    console.log(`Fetching products for category: ${categorySlug}`);
    try {
      const response = await fetch(`/api/products?categories=${encodeURIComponent(categorySlug)}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Fetched products:', data);
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('Expected an array of products, but got:', data);
        setError('Unexpected response format');
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    }
  };

  const categories = [
    { name: "NECKLACES", img: Necklaces, slug: "necklaces" },
    { name: "RINGS", img: Rings, slug: "rings" },
    { name: "BRACELETS", img: Bracelets, slug: "bracelets" },
    { name: "EARNINGS", img: Earnings, slug: "earnings" },
    { name: "CHARM & DANGLES", img: Charm, slug: "charm-dangles" },
    { name: "GIFT IDEAS", img: Gift, slug: "gift-ideas" },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="category flex flex-wrap justify-evenly items-center p-12">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="flex flex-col items-center gap-4 cursor-pointer"
              onClick={() => fetchProducts(category.slug)}
            >
              <img src={category.img} alt={category.name.toLowerCase()} className="w-12 h-12" />
              <p className="border-b-2 border-gray-500 text-base">{category.name}</p>
            </div>
          ))}
        </div>
        <div className="products mt-8">
          {error && <p className="text-center text-red-500">{error}</p>}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <div key={product._id} className="product-card">
                  <img src={product.productPic} alt={product.title} className="w-full h-48 object-cover" />
                  <h3 className="text-lg font-bold">{product.title}</h3>
                  <p>{product.description}</p>
                  <p className="text-gray-700">${product.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No products found for the selected category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
