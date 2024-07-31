import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Price = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Prices, setPrice] = useState([]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="flex border-b justify-between py-5 cursor-pointer"
        onClick={toggleOpen}
      >
        <h1 className="text-2xl text-[#222222]">Price</h1>
        {isOpen ? (
          <IoIosArrowUp className="text-2xl text-[#757575]" />
        ) : (
          <IoIosArrowDown className="text-2xl text-[#757575]" />
        )}
      </div>
      {isOpen && (
        <div className="pl-4 py-2">
          {Prices.map((price) => (
            <label key={price.id} className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2">
                {price.name} ({price.count})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Price;
