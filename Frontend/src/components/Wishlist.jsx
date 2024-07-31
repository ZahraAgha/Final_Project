// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa6";
// import Features from "./Features";
// import { useWishlist } from "../features/wishlist";

// const Wishlist = () => {
//   const wishlist = useWishlist();

//   return (
//     <div className="container mx-auto">
//       <nav className="flex justify-center items-center flex-col ">
//         <h1>Wishlist</h1>

//         <ol className="flex items-center space-x-2">
//           <li className="text-[#757575]  flex items-center">
//             <NavLink to="/home">Home</NavLink>
//             <span className="mx-2">
//               <FaAngleRight />
//             </span>
//           </li>
//           <li className="text-[#757575] flex items-center">
//             <NavLink to="/blog">Pages</NavLink>
//             <span className="mx-2">
//               <FaAngleRight />
//             </span>
//           </li>
//           <li className="text-[#757575] flex items-center">
//             <NavLink to="/blog">Wishlist</NavLink>
//             <span className="mx-2">
//               <FaAngleRight />
//             </span>
//           </li>
//         </ol>
//       </nav>

//       <section className="mt-6">
//         {wishlist.items.map((item) => (
//           <div>
//             <img src={item.product.productPic} />
//             <div>{item.product.title}</div>
//           </div>
//         ))}
//       </section>

//       <section>
//         <Features />
//       </section>
//     </div>
//   );
// };

// export default Wishlist;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa6";
// import Features from "./Features";
// import { useWishlist } from "../features/wishlist";

// const Wishlist = () => {
//   const wishlist = useWishlist();

//   return (
//     <div className="container mx-auto">
//       <nav className="flex justify-center items-center flex-col my-6">
//         <h1 className="text-3xl font-semibold">Wishlist</h1>
//         <ol className="flex items-center space-x-2 mt-2">
//           <li className="text-[#757575] flex items-center">
//             <NavLink to="/home">Home</NavLink>
//             <span className="mx-2">
//               <FaAngleRight />
//             </span>
//           </li>
//           <li className="text-[#757575] flex items-center">
//             <NavLink to="/blog">Pages</NavLink>
//             <span className="mx-2">
//               <FaAngleRight />
//             </span>
//           </li>
//           <li className="text-[#757575] flex items-center">
//             <NavLink to="/wishlist">Wishlist</NavLink>
//           </li>
//         </ol>
//       </nav>

//       <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {wishlist.items.map((item, index) => (
//           <div key={index} className="flex flex-col items-center bg-white border p-4 rounded-lg">
//             <img src={item.product.productPic} alt={item.product.title} className="w-full h-80 object-cover mb-4" />
//             <div className="text-center">
//               {/* <div className="text-lg font-semibold">{item.product.title}</div>
//               <div className="text-md font-medium mt-2">${item.product.price}</div> */}
//               <h1 className="text-[#757575] text-sm">{item.product.title}</h1>
//                 <p className="text-[#222222] font-normal text-lg">
//                   {item.product.description}
//                 </p>
//                 <span className="text-[#222222] font-normal text-lg">
//                   {item.product.price}
//                 </span>
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className="mt-8">
//         <Features />
//       </section>
//     </div>
//   );
// };

// export default Wishlist;



import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaTimes } from "react-icons/fa";
import Features from "./Features";
import { useWishlist } from "../features/wishlist";

const Wishlist = () => {
  const wishlist = useWishlist();

  const handleRemove = (productId) => {
    wishlist.removeFromWishlist(productId);
  };

  return (
    <div className="container mx-auto">
      <nav className="flex justify-center items-center flex-col my-6">
        <h1 className="text-3xl font-semibold">Wishlist</h1>
        <ol className="flex items-center space-x-2 mt-2">
          <li className="text-[#757575] flex items-center">
            <NavLink to="/home">Home</NavLink>
            <span className="mx-2">
              <FaAngleRight />
            </span>
          </li>
          <li className="text-[#757575] flex items-center">
            <NavLink to="/blog">Pages</NavLink>
            <span className="mx-2">
              <FaAngleRight />
            </span>
          </li>
          <li className="text-[#757575] flex items-center">
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
        </ol>
      </nav>

      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.items.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center bg-white border p-4 rounded-lg">
            <img src={item.product.productPic} alt={item.product.title} className="w-full h-80 object-cover mb-4" />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              onClick={() => handleRemove(item.product._id)}
            >
              <FaTimes />
            </button>
            <div className="text-center">
              <h1 className="text-[#757575] text-sm">{item.product.title}</h1>
              <p className="text-[#222222] font-normal text-lg">{item.product.description}</p>
              <span className="text-[#222222] font-normal text-lg">{item.product.price}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <Features />
      </section>
    </div>
  );
};

export default Wishlist;
