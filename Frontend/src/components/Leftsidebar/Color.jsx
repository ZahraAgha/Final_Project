// import React, { useState, useEffect } from "react";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// const Color = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [colors, setColor] = useState([]);

//   // Uncomment and use this part when you have the API endpoint
//   // useEffect(() => {
//   //   fetch("your-api-endpoint/materials")
//   //     .then((response) => response.json())
//   //     .then((data) => setMaterials(data))
//   //     .catch((error) => console.error(error));
//   // }, []);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <div
//         className="flex border-b justify-between py-5 cursor-pointer"
//         onClick={toggleOpen}
//       >
//         <h1 className="text-2xl text-[#222222]">Color</h1>
//         {isOpen ? (
//           <IoIosArrowUp className="text-2xl text-[#757575]" />
//         ) : (
//           <IoIosArrowDown className="text-2xl text-[#757575]" />
//         )}
//       </div>
//       {isOpen && (
//         <div className="pl-4 py-2">
//           {colors.map((color) => (
//             <label key={color.id} className="flex items-center">
//               <input type="checkbox" />
//               <span className="ml-2">
//                 {color.name} ({color.count})
//               </span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Color;
