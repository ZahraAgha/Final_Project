import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../features/data";

const AdminOrders = () => {
  const { data, reloadData } = useFetch("/api/admin/orders");

  return (
    <div className="flex justify-center bg-[#E7D7C9] min-h-screen p-4">
      <div className=" md:w-3/4 ">
        <div className="mb-4 flex justify-end">
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Products</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((order) => (
                  <tr key={order._id} className="text-gray-700">
                    <td className="py-2 px-4 border">
                      {order._id}
                    </td>
                    <td className="py-2 px-4 border">
                      <strong>{order.user?.fullName}</strong><br/>
                      {order.user?.email}
                    </td>
                    <td className="py-2 px-4 border">
                      {order.orderItems?.map(x => x.product.title).join(', ')}
                    </td>
                    <td className="py-2 px-4 border">
                      {order.totalPrice}
                    </td>
                    <td className="py-2 px-4 border">
                      {order.orderItems[0]?.status}
                    </td>
                    <td className="py-2 px-4 border">
                      <NavLink to={`/admin/orders/edit/${order._id}`}>
                        <button className="mr-2">
                          View Details
                        </button>
                      </NavLink>
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

export default AdminOrders;
