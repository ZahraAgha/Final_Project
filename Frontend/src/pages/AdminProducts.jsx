import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../features/data";

const AdminProducts = () => {
  const { data, reloadData } = useFetch("/api/admin/products");

  return (
    <div className="flex justify-center bg-[#E7D7C9] min-h-screen p-4">
      <div className=" md:w-3/4 ">
        <div className="mb-4 flex justify-end">
          <NavLink to="/admin/products/add">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Add product
            </button>
          </NavLink>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">SKU</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Category</th>
                  <th className="py-2 px-4">Qty</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((product) => (
                  <tr key={product._id} className="text-gray-700">
                    <td className="py-2 px-4 border">
                      {product.productPic && (
                        <img
                          src={`http://localhost:5555/${product.productPic}`}
                          alt={product.title}
                          className="inline-block mr-2"
                          style={{width: "50px", height: "50px"}}
                        />
                      )}
                      {product.title}
                    </td>
                    <td className="py-2 px-4 border">{product.sku}</td>
                    <td className="py-2 px-4 border">{product.price}</td>
                    <td className="py-2 px-4 border">
                      {product.category?.name}<br/>
                      {product.color?.name}
                    </td>
                    <td className="py-2 px-4 border">
                      {product.quantity}
                    </td>
                    <td className="py-2 px-4 border">
                      <NavLink to={`/admin/products/edit/${product._id}`}>
                        <button className="mr-2">
                          Edit
                        </button>
                      </NavLink>
                      <button
                        onClick={async () => {
                          if (window.confirm("Are you sure?")) {
                            await fetch(`/api/admin/products/${product._id}`, {
                              method: "delete",
                            });
                            reloadData();
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
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

export default AdminProducts;
