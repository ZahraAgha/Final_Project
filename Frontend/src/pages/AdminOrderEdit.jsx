import React, {useCallback, useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {useFetch} from "../features/data";
import Select from "../components/Select";

const AdminOrderEdit = () => {
  const {id} = useParams();
  const {data, reloadData} = useFetch(`/api/admin/orders/${id}`, [id]);

  if (!data) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Order Details
        </h1>

        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="p-10 "
      style={{backgroundColor: "#E7D7C9"}}
    >
      <div className="flex justify-center bg-[#E7D7C9] min-h-screen p-4">
        <div className=" w-1/2 ">
          <div className="bg-white p-10 rounded-lg shadow-md w-full mb-4">
            <h1 className="text-2xl font-bold mb-5 text-center">Customer</h1>

            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <input
                  type="text"
                  title="Full name"
                  className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
                  value={data.user.fullName}
                  disabled
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <input
                  type="text"
                  title="Email"
                  className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
                  value={data.user.email}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-md w-full mb-4">
            <h1 className="text-2xl font-bold mb-5 text-center">Address</h1>

            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 mb-4">
                <input
                  type="text"
                  title="Street address"
                  className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
                  value={data.shippingAddress.streetAddress}
                  disabled
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <input
                  type="text"
                  title="City"
                  className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
                  value={data.shippingAddress.city}
                  disabled
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <input
                  type="text"
                  title="District"
                  className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
                  value={data.shippingAddress.district}
                  disabled
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <input
                  type="text"
                  title="Zip Code"
                  className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
                  value={data.shippingAddress.zipCode}
                  disabled
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <input
                  type="text"
                  title="Country"
                  className="input w-full bg-gray-100 p-2 rounded border border-gray-300"
                  value={data.shippingAddress.country}
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
                </thead>
                <tbody>
                {data.orderItems?.map((item) => (
                  <tr key={item._id} className="text-gray-700">
                    <td className="py-2 px-4 border">
                      <NavLink to={`/admin/products/edit/${item.product._id}`}>
                        {item.product.productPic && (
                          <img
                            src={`http://localhost:5555/${item.product.productPic}`}
                            alt={item.product.title}
                            className="inline-block mr-2"
                            style={{width: "50px", height: "50px"}}
                          />
                        )}
                        {item.product.title}
                      </NavLink>
                    </td>
                    <td className="py-2 px-4 border">
                      {item.quantity} x {item.product.price}
                    </td>
                    <td className="py-2 px-4 border">
                      {item.price}
                    </td>
                    <td className="py-2 px-4 border">
                      <Select
                        value={item.status}
                        onChange={async (value) => {
                          const res = await fetch(`/api/admin/orders/${data._id}/items/${item._id}`, {
                            method: 'PUT',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                              status: value,
                            })
                          });
                          if (res.ok) {
                            reloadData();
                          } else {
                            alert('Unable to update status');
                          }
                        }}
                        options={["Pending", "Processing", "Shipped", "Delivered"].map(x => ({
                          value: x,
                          label: x
                        }))}
                      />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderEdit;
