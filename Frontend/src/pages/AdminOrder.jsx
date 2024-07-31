import React from "react";

const AdminOrder = () => {
  const products = [
    {
      name: "Raw Black T-Shirt Lineup",
      sku: "47514501",
      price: "$75.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      image: "/path/to/raw_black_tshirt_lineup.png",
    },
    {
      name: "Classic Monochrome Tees",
      sku: "47514501",
      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt, Men",
      image: "/path/to/classic_monochrome_tees.png",
    },
    {
      name: "Monochromatic Wardrobe",
      sku: "47514501",
      price: "$27.00",
      stock: "In Stock",
      categories: "T-shirt",
      image: "/path/to/monochromatic_wardrobe.png",
    },
    {
      name: "Essential Neutrals",
      sku: "47514501",
      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt, Raw",
      image: "/path/to/essential_neutrals.png",
    },
    {
      name: "UTRAANET Black",
      sku: "47514501",
      price: "$43.00",
      stock: "In Stock",
      categories: "T-shirt, Trend",
      image: "/path/to/utranet_black.png",
    },
    {
      name: "Elegant Ebony Sweatshirts",
      sku: "47514501",
      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt",
      image: "/path/to/elegant_ebony_sweatshirts.png",
    },
    {
      name: "Sleek and Cozy Black",
      sku: "47514501",
      price: "$57.00",
      stock: "In Stock",
      categories: "Hoodie",
      image: "/path/to/sleek_and_cozy_black.png",
    },
    {
      name: "MOCKUP Black",
      sku: "47514501",
      price: "$30.00",
      stock: "In Stock",
      categories: "T-shirt",
      image: "/path/to/mockup_black.png",
    },
  ];

  return (
    <div className="flex justify-center bg-[#E7D7C9] min-h-screen p-4">
      <div className="w-11/12 md:w-3/4 ml-[350px]">
        <div className="mb-4 flex justify-end">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Add product
          </button>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Order</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="py-2 px-4 border">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="inline-block mr-2"
                          style={{ width: "50px", height: "50px" }}
                        />
                      )}
                      {product.name}
                    </td>
                    <td className="py-2 px-4 border">{product.sku}</td>
                    <td className="py-2 px-4 border">{product.price}</td>
                    <td className="py-2 px-4 border">{product.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
