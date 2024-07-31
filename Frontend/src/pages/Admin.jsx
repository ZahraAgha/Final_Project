import React from "react";
import { BiBox } from "react-icons/bi";
import { PiShoppingCartBold } from "react-icons/pi";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { IoIosResize } from "react-icons/io";
import { IoColorFilterOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

const Admin = () => {
  return (
    <div className="bg-[#BBAD98] min-h-screen flex">
      <section className="w-80 bg-[#C9C2B2] flex items-center flex-col gap-6 py-8 rounded-lg">
        <h1 className="text-[40px] text-[#E7D7C9] ">Admin</h1>
        <Link to="/admin/products">
          <div className="flex gap-2 items-center">
            <h2 className="text-white text-[25px]"> Products</h2>
            <span className="text-white text-[25px]">
              <BiBox />
            </span>
          </div>
        </Link>
        <Link to="/admin/orders">
          <div className="flex gap-2 items-center">
            <h2 className="text-white text-[25px]"> Orders</h2>
            <span className="text-white text-[25px]">
              <PiShoppingCartBold />
            </span>
          </div>
        </Link>
        <Link to="/admin/sizes">
          <div className="flex gap-2 items-center">
            <h2 className="text-white text-[25px]"> Product Size</h2>
            <span className="text-white text-[25px]">
              <IoIosResize />
            </span>
          </div>
        </Link>
        <Link to="/admin/categories">
          <div className="flex gap-2 items-center">
            <h2 className="text-white text-[25px]"> Categories</h2>
            <span className="text-white text-[25px]">
              <BiCategoryAlt />
            </span>
          </div>
        </Link>
        <Link to="/admin/colors">
          <div className="flex gap-2 items-center">
            <h2 className="text-white text-[25px]"> Colors</h2>
            <span className="text-white text-[25px]">
              <IoColorFilterOutline />
            </span>
          </div>
        </Link>
      </section>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
