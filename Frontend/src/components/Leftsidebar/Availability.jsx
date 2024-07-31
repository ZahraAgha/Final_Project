import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Availability = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Availability, setAvailability] = useState([
    { id: 1, name: "In Stock", count: 10 },
    { id: 2, name: "Stock Out", count: 20 },
  ]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="flex border-b justify-between py-5 cursor-pointer"
        onClick={toggleOpen}
      >
        <h1 className="text-2xl text-[#222222]">Availability</h1>
        {isOpen ? (
          <IoIosArrowUp className="text-2xl text-[#757575]" />
        ) : (
          <IoIosArrowDown className="text-2xl text-[#757575]" />
        )}
      </div>
      {isOpen && (
        <div className="pl-4 py-2">
          {Availability.map((availability) => (
            <label key={availability.id} className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2">
                {availability.name} ({availability.count})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Availability;
