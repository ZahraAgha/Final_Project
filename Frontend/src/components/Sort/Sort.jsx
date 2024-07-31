import React, { useState } from "react";

// Icons
import { FaChevronDown } from "react-icons/fa6";

// Components
import SortBtn from "./SortBtn";

const Sort = ({ onSortChange }) => {
  const [open, setOpen] = useState(false);

  const handleSort = (sortOption) => {
    onSortChange(sortOption);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex text-sm items-center gap-4 justify-between text-[#5C5F6A] bg-white p-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="uppercase">sort by</span>
        <span>
        <FaChevronDown />
        </span>
      </button>
      {open && (
        <div className="absolute top-[calc(100%_+_5px)] right-0 z-20 border border-gray-100 rounded overflow-hidden bg-white">
          <SortBtn onClick={() => handleSort("price-low-high")}>
            Price low-high
          </SortBtn>
          <SortBtn onClick={() => handleSort("price-high-low")}>
            Price high-low
          </SortBtn>
          <SortBtn onClick={() => handleSort("newest")}>Newest</SortBtn>
        </div>
      )}
    </div>
  );
};

export default Sort;


