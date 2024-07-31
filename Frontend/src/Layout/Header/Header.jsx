// import React, { useState } from "react";
// import { LuHeart } from "react-icons/lu";
// import {
//   HiOutlineShoppingCart,
//   HiOutlinePhone,
//   HiMenu,
//   HiX,
// } from "react-icons/hi";
// import { IoLocationOutline } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
// import UserButton from "./UserButton";
// import CartDriwer from "../../components/CartDriwer";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleCart = () => {
//     setCartOpen(!cartOpen);
//   };

//   return (
//     <header>
//       <nav className="shadow-md fixed top-0 left-0 right-0 bg-white z-50">
//         <div className="container mx-auto flex items-center justify-between p-4 bg-white">
//           <div className="flex items-center">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search Products"
//                 className="pl-10 pr-4 py-2 border  rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 xs:pl-8 xs:pr-3 xs:py-1 sm:pl-10 sm:pr-4 sm:py-2"
//               />
//               <svg
//                 className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 xs:w-4 xs:h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
//                 />
//               </svg>
//             </div>
//           </div>
//           <div className="font-jost font-normal text-xl xs:text-sm sm:text-2xl md:text-3xl lg:text-4xl">
//             ALUKAS & CO
//           </div>
//           <div className="flex items-center space-x-4">
//             <UserButton />
//             <NavLink to="/wishlist">
//               <LuHeart className="w-6 h-6 text-gray-700" />
//             </NavLink>
//             <HiOutlineShoppingCart
//               className="w-6 h-6 text-gray-700 cursor-pointer"
//               onClick={toggleCart}
//             />
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="focus:outline-none">
//               {menuOpen ? (
//                 <HiX className="w-6 h-6 text-gray-700" />
//               ) : (
//                 <HiMenu className="w-6 h-6 text-gray-700" />
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div
//         className={`container mx-auto mt-20 flex flex-col lg:flex-row justify-between ${
//           menuOpen ? "block" : "hidden md:flex"
//         }`}
//       >
//         <ul className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-11 p-4 md:p-6 lg:p-12 font-medium">
//           <li>
//             <NavLink to="/home">HOME</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">ABOUT</NavLink>
//           </li>
//           <li>
//             <NavLink to="/product">PRODUCT</NavLink>
//           </li>
//           <li>
//             <NavLink to="/blog">BLOG</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contactus">CONTACT US</NavLink>
//           </li>
//         </ul>
//         <ul className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center font-medium p-4 md:p-6 lg:p-12">
//           <li className="flex items-center gap-2">
//             <HiOutlinePhone className="w-5 h-5" />
//             <span>(+800) 1234 56</span>
//           </li>
//           <li className="flex items-center gap-2">
//             <IoLocationOutline className="w-5 h-5" />
//             <span>Our Stores</span>
//           </li>
//         </ul>
//       </div>

//       <div
//         className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white p-4`}
//       >
//         <ul className="flex flex-col gap-4 font-medium">
//           <li>
//             <NavLink to="/home">HOME</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">ABOUT</NavLink>
//           </li>
//           <li>
//             <NavLink to="/product">PRODUCT</NavLink>
//           </li>
//           <li>
//             <NavLink to="/blog">BLOG</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contactus">CONTACT US</NavLink>
//           </li>
//         </ul>
//         <ul className="flex flex-col gap-4 mt-4 font-medium">
//           <li className="flex items-center gap-2">
//             <HiOutlinePhone className="w-5 h-5" />
//             <span>(+800) 1234 56</span>
//           </li>
//           <li className="flex items-center gap-2">
//             <IoLocationOutline className="w-5 h-5" />
//             <span>Our Stores</span>
//           </li>
//         </ul>
//       </div>

//       {/* Cart Drawer */}
//       <CartDriwer toggleCart={toggleCart} cartOpen={cartOpen} />
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { LuHeart } from "react-icons/lu";
import {
  HiOutlineShoppingCart,
  HiOutlinePhone,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import UserButton from "./UserButton";
import CartDriwer from "../../components/CartDriwer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <header>
      <nav className="shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <div className="container mx-auto flex items-center justify-between p-4 bg-white">
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="pl-8 pr-4 py-1 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 sm:pl-10 sm:pr-4 sm:py-2"
              />
              <svg
                className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>
          </div>
          <div className="font-jost font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl">
            ALUKAS & CO
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <UserButton />
            <NavLink to="/wishlist">
              <LuHeart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </NavLink>
            <HiOutlineShoppingCart
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 cursor-pointer"
              onClick={toggleCart}
            />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? (
                <HiX className="w-5 h-5 text-gray-700" />
              ) : (
                <HiMenu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`container mx-auto mt-20 flex flex-col lg:flex-row justify-between ${
          menuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 p-4 font-medium">
          <li>
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li>
            <NavLink to="/blog">BLOG</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">CONTACT US</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 items-center font-medium p-4">
          <li className="flex items-center gap-1 sm:gap-2">
            <HiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">(+800) 1234 56</span>
          </li>
          <li className="flex items-center gap-1 sm:gap-2">
            <IoLocationOutline className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Our Stores</span>
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white p-4`}
      >
        {/* <ul className="flex flex-col gap-2 font-medium">
          <li>
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/product">PRODUCT</NavLink>
          </li>
          <li>
            <NavLink to="/blog">BLOG</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">CONTACT US</NavLink>
          </li>
        </ul>
        <ul className="flex flex-col gap-2 mt-4 font-medium">
          <li className="flex items-center gap-1">
            <HiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">(+800) 1234 56</span>
          </li>
          <li className="flex items-center gap-1">
            <IoLocationOutline className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Our Stores</span>
          </li>
        </ul> */}
      </div>

      {/* Cart Drawer */}
      <CartDriwer toggleCart={toggleCart} cartOpen={cartOpen} />
    </header>
  );
};

export default Header;

