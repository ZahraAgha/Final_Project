import React from "react";

const CheckoutItem = ({item}) => {
  return (
    <div
      className="flex justify-between items-center mb-4"
      key={item._id}
    >
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] bg-[#F6F6F6] rounded-[100px] flex justify-center items-center">
          <img className="w-[25px] h-[35px]" src={`http://localhost:5555/${item.product.productPic}`} alt="product"/>
        </div>
        <span className="text-gray-700 ml-4">{item.product.title} - {item.product.price.toFixed(2)} x {item.quantity}</span>
      </div>
      <span className="text-gray-700">${(item.product.price * item.quantity).toFixed(2)}</span>
    </div>
  );
};

export default CheckoutItem;



