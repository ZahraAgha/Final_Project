import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Size = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Sizes, setSize] = useState([
    { id: 1, name: "S", count: 10 },
    { id: 2, name: "M", count: 20 },
    { id: 3, name: "L", count: 15 },
  ]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="flex border-b justify-between py-5 cursor-pointer"
        onClick={toggleOpen}
      >
        <h1 className="text-2xl text-[#222222]">Size</h1>
        {isOpen ? (
          <IoIosArrowUp className="text-2xl text-[#757575]" />
        ) : (
          <IoIosArrowDown className="text-2xl text-[#757575]" />
        )}
      </div>
      {isOpen && (
        <div className="pl-4 py-2">
          {Sizes.map((size) => (
            <label key={size.id} className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2">
                {size.name} ({size.count})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Size;
