// import React, { useState, useEffect } from "react";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// const Collections = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [collections, setCollections] = useState([
//     { id: 1, name: "Necklaces" },
//     { id: 2, name: "Rings" },
//     { id: 3, name: "Bracelets" },
//     { id: 4, name: "Earrings" },
//     { id: 5, name: "Charm & Dangles" },
//     { id: 6, name: "Gift Ideas" },
//   ]);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <div
//         className="flex border-b justify-between py-5 cursor-pointer"
//         onClick={toggleOpen}
//       >
//         <h1 className="text-2xl text-[#222222]">Collections</h1>
//         {isOpen ? (
//           <IoIosArrowUp className="text-2xl text-[#757575]" />
//         ) : (
//           <IoIosArrowDown className="text-2xl text-[#757575]" />
//         )}
//       </div>
//       {isOpen && (
//         <div className="pl-4 py-2">
//           <ul>
//             {collections.map((collection) => (
//               <li key={collection.id}>{collection.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collections;




//ishledi
// import React, { useState, useEffect } from "react";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// const Collections = ({ setSelectedCategory }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [collections, setCollections] = useState([]);

//   useEffect(() => {
//     const fetchCollections = async () => {
//       try {
//         const response = await fetch('http://localhost:5555/api/categories');
//         const data = await response.json();
//         setCollections(data);
//       } catch (error) {
//         console.error("Error fetching collections:", error);
//       }
//     };

//     fetchCollections();
//   }, []);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <div
//         className="flex border-b justify-between py-5 cursor-pointer"
//         onClick={toggleOpen}
//       >
//         <h1 className="text-2xl text-[#222222]">Collections</h1>
//         {isOpen ? (
//           <IoIosArrowUp className="text-2xl text-[#757575]" />
//         ) : (
//           <IoIosArrowDown className="text-2xl text-[#757575]" />
//         )}
//       </div>
//       {isOpen && (
//         <div className="pl-4 py-2">
//           <ul>
//             {collections.map((collection) => (
//               <li
//                 key={collection._id}
//                 className="cursor-pointer"
//                 onClick={() => setSelectedCategory(encodeURIComponent(collection.slug))}
//               >
//                 {collection.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collections;


// import React, { useState, useEffect } from "react";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// const Collections = ({ setSelectedCategories }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [collections, setCollections] = useState([]);
//   const [selectedCategories, setSelectedCategoriesState] = useState([]);

//   useEffect(() => {
//     const fetchCollections = async () => {
//       try {
//         const response = await fetch('http://localhost:5555/api/categories');
//         const data = await response.json();
//         setCollections(data);
//       } catch (error) {
//         console.error("Error fetching collections:", error);
//       }
//     };

//     fetchCollections();
//   }, []);

//   const toggleOpen = () => setIsOpen(!isOpen);

//   const handleCheckboxChange = (slug) => {
//     const updatedCategories = selectedCategories.includes(slug)
//       ? selectedCategories.filter(category => category !== slug)
//       : [...selectedCategories, slug];
//     setSelectedCategoriesState(updatedCategories);
//     setSelectedCategories(updatedCategories);
//   };

//   return (
//     <div>
//       <div
//         className="flex border-b justify-between py-5 cursor-pointer"
//         onClick={toggleOpen}
//       >
//         <h1 className="text-2xl text-[#222222]">Collections</h1>
//         {isOpen ? (
//           <IoIosArrowUp className="text-2xl text-[#757575]" />
//         ) : (
//           <IoIosArrowDown className="text-2xl text-[#757575]" />
//         )}
//       </div>
//       {isOpen && (
//         <div className="pl-4 py-2">
//           <ul>
//             {collections.map((collection) => (
//               <li key={collection._id} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={selectedCategories.includes(encodeURIComponent(collection.slug))}
//                   onChange={() => handleCheckboxChange(encodeURIComponent(collection.slug))}
//                   className="mr-2"
//                 />
//                 {collection.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collections;




import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Collections = ({ setSelectedCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState([]);
  const [selectedCategories, setSelectedCategoriesState] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch('http://localhost:5555/api/categories');
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (slug) => {
    const updatedCategories = selectedCategories.includes(slug)
      ? selectedCategories.filter(category => category !== slug)
      : [...selectedCategories, slug];
    setSelectedCategoriesState(updatedCategories);
    setSelectedCategories(updatedCategories);
  };

  return (
    <div>
      <div
        className="flex border-b justify-between py-5 cursor-pointer"
        onClick={toggleOpen}
      >
        <h1 className="text-2xl text-[#222222]">Collections</h1>
        {isOpen ? (
          <IoIosArrowUp className="text-2xl text-[#757575]" />
        ) : (
          <IoIosArrowDown className="text-2xl text-[#757575]" />
        )}
      </div>
      {isOpen && (
        <div className="pl-4 py-2">
          <ul>
            {collections.map((collection) => (
              <li key={collection._id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(encodeURIComponent(collection.slug))}
                  onChange={() => handleCheckboxChange(encodeURIComponent(collection.slug))}
                  className="mr-2"
                />
                {collection.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Collections;
