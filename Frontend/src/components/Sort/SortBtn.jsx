import React from "react";

const SortBtn = ({ children, onClick }) => {
  return (
    <button
      className="text-center bg-white p-2 text-[#5C5F6A] text-sm cursor-pointer min-w-[150px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SortBtn;



