// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import Sort from "./Sort/Sort";

// const RightCards = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/products");
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [products]);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

//   const handleClick = (event) => {
//     setCurrentPage(Number(event.target.id));
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <div className="flex justify-between">
//         <div>Showing 1-3 of 9</div>

//         <Sort />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentItems.map((product) => (
//           <div key={product.id} className="border p-4 rounded-lg">
//             <Link to={`/products/${product._id}`}>
//               <div>
//                 <img
//                   src={product.productPic}
//                   alt={product.description}
//                   className="w-full h-72 object-cover"
//                 />
//               </div>
//               <div className="mt-4 flex flex-col items-center">
//                 <h1 className="text-[#757575] text-sm">{product.title}</h1>
//                 <p className="text-[#222222] font-normal text-lg">
//                   {product.description}
//                 </p>
//                 <span className="text-[#222222] font-normal text-lg">
//                   {product.price}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-6">
//         <ul className="flex list-none">
//           {pageNumbers.map((number) => (
//             <li key={number} className="mx-1">
//               <button
//                 id={number}
//                 onClick={handleClick}
//                 className={`px-3 py-1 border rounded ${
//                   currentPage === number ? "border-black" : "border-transparent"
//                 }`}
//               >
//                 {number}
//               </button>
//             </li>
//           ))}
//           <li className="mx-1">
//             <button
//               onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
//               className="px-3 py-1 border rounded"
//               disabled={currentPage >= pageNumbers.length}
//             >
//               &gt;
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RightCards;





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Sort from "./Sort/Sort";

// const RightCards = ({ selectedCategory }) => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         console.log("Fetching products for category:", selectedCategory); // Debug log
//         const response = await fetch(`/api/products?category=${selectedCategory}`);
//         const data = await response.json();
//         console.log("Fetched products:", data); // Debug log

//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error("API response is not an array:", data);
//           setProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]);
//       }
//     };

//     fetchProducts();
//   }, [selectedCategory]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [products]);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

//   const handleClick = (event) => {
//     setCurrentPage(Number(event.target.id));
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <div className="flex justify-between">
//         <div>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, products.length)} of {products.length}</div>
//         <Sort />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentItems.map((product) => (
//           <div key={product._id} className="border p-4 rounded-lg">
//             <Link to={`/products/${product._id}`}>
//               <div>
//                 <img
//                   src={product.productPic}
//                   alt={product.description}
//                   className="w-full h-72 object-cover"
//                 />
//               </div>
//               <div className="mt-4 flex flex-col items-center">
//                 <h1 className="text-[#757575] text-sm">{product.title}</h1>
//                 <p className="text-[#222222] font-normal text-lg">
//                   {product.description}
//                 </p>
//                 <span className="text-[#222222] font-normal text-lg">
//                   {product.price}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-6">
//         <ul className="flex list-none">
//           {pageNumbers.map((number) => (
//             <li key={number} className="mx-1">
//               <button
//                 id={number}
//                 onClick={handleClick}
//                 className={`px-3 py-1 border rounded ${
//                   currentPage === number ? "border-black" : "border-transparent"
//                 }`}
//               >
//                 {number}
//               </button>
//             </li>
//           ))}
//           <li className="mx-1">
//             <button
//               onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
//               className="px-3 py-1 border rounded"
//               disabled={currentPage >= pageNumbers.length}
//             >
//               &gt;
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RightCards;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Sort from "./Sort/Sort";

// const RightCards = ({ selectedCategories }) => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const categoryQuery = selectedCategories.length > 0
//           ? `?categories=${selectedCategories.join(',')}`
//           : '';
//         console.log("Fetching products for categories:", categoryQuery); // Debug log
//         const response = await fetch(`/api/products${categoryQuery}`);
//         const data = await response.json();
//         console.log("Fetched products:", data); // Debug log

//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error("API response is not an array:", data);
//           setProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]);
//       }
//     };

//     fetchProducts();
//   }, [selectedCategories]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [products]);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

//   const handleClick = (event) => {
//     setCurrentPage(Number(event.target.id));
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <div className="flex justify-between">
//         <div>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, products.length)} of {products.length}</div>
//         <Sort />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentItems.map((product) => (
//           <div key={product._id} className="border p-4 rounded-lg">
//             <Link to={`/products/${product._id}`}>
//               <div>
//                 <img
//                   src={product.productPic}
//                   alt={product.description}
//                   className="w-full h-72 object-cover"
//                 />
//               </div>
//               <div className="mt-4 flex flex-col items-center">
//                 <h1 className="text-[#757575] text-sm">{product.title}</h1>
//                 <p className="text-[#222222] font-normal text-lg">
//                   {product.description}
//                 </p>
//                 <span className="text-[#222222] font-normal text-lg">
//                   {product.price}
//                 </span>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-6">
//         <ul className="flex list-none">
//           {pageNumbers.map((number) => (
//             <li key={number} className="mx-1">
//               <button
//                 id={number}
//                 onClick={handleClick}
//                 className={`px-3 py-1 border rounded ${
//                   currentPage === number ? "border-black" : "border-transparent"
//                 }`}
//               >
//                 {number}
//               </button>
//             </li>
//           ))}
//           <li className="mx-1">
//             <button
//               onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
//               className="px-3 py-1 border rounded"
//               disabled={currentPage >= pageNumbers.length}
//             >
//               &gt;
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RightCards;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sort from "./Sort/Sort";

const RightCards = ({ selectedCategories }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryQuery = selectedCategories.length > 0
          ? `?categories=${selectedCategories.join(',')}`
          : '';
        console.log("Fetching products for categories:", categoryQuery); // Debug log
        const response = await fetch(`/api/products${categoryQuery}`);
        const data = await response.json();
        console.log("Fetched products:", data); // Debug log

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API response is not an array:", data);
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [selectedCategories]);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex justify-between">
        <div>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, products.length)} of {products.length}</div>
        <Sort />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg">
            <Link to={`/products/${product._id}`}>
              <div>
                <img
                  src={product.productPic}
                  alt={product.description}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <h1 className="text-[#757575] text-sm">{product.title}</h1>
                <p className="text-[#222222] font-normal text-lg">
                  {product.description}
                </p>
                <span className="text-[#222222] font-normal text-lg">
                  ${product.price}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <ul className="flex list-none">
          {pageNumbers.map((number) => (
            <li key={number} className="mx-1">
              <button
                id={number}
                onClick={handleClick}
                className={`px-3 py-1 border rounded ${
                  currentPage === number ? "border-black" : "border-transparent"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <li className="mx-1">
            <button
              onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
              className="px-3 py-1 border rounded"
              disabled={currentPage >= pageNumbers.length}
            >
              &gt;
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightCards;