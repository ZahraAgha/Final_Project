import React from "react";
import { NavLink } from "react-router-dom";
import { useFetch } from "../features/data";

const AdminSizes = () => {
  const { data, reloadData } = useFetch("/api/admin/sizes");

  return (
    <div className="flex justify-center bg-[#E7D7C9] min-h-screen p-4">
      <div className=" md:w-3/4 ">
        <div className="mb-4 flex justify-end">
          <NavLink to="/admin/sizes/add">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
              Add size
            </button>
          </NavLink>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item._id} className="text-gray-700">
                    <td className="py-2 px-4 border">{item.name}</td>
                    <td className="py-2 px-4 border">
                      <button
                        onClick={async () => {
                          if (window.confirm("Are you sure?")) {
                            await fetch(`/api/admin/sizes/${item._id}`, {
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

export default AdminSizes;
