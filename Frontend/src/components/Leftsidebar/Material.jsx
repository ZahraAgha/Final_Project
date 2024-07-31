import React, { useState} from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Material = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [materials, setMaterials] = useState([
    { id: 1, name: "Gold", count: 10 },
    { id: 2, name: "Gold Rose", count: 20 },
    { id: 3, name: "Silver", count: 15 },
  ]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="flex border-b justify-between py-5 cursor-pointer"
        onClick={toggleOpen}
      >
        <h1 className="text-2xl text-[#222222]">Material</h1>
        {isOpen ? (
          <IoIosArrowUp className="text-2xl text-[#757575]" />
        ) : (
          <IoIosArrowDown className="text-2xl text-[#757575]" />
        )}
      </div>
      {isOpen && (
        <div className="pl-4 py-2">
          {materials.map((material) => (
            <label key={material.id} className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2">
                {material.name} ({material.count})
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Material;


