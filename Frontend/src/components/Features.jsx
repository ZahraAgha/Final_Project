import React from "react";
import FreeShipping from "../assets/images/free-shipping.webp";
import Returns from "../assets/images/returns.webp";
import Secured from "../assets/images/secured-payment.webp";
import Support from "../assets/images/support.webp";

const Features = () => {
  return (
    <div className="flex justify-evenly py-7">
      <div className="flex flex-col items-center ">
        <div className="py-3">
          <img src={FreeShipping} alt="Free" />
        </div>
        <div>
          <h1 className="pl-8">Free Shipping</h1>
          <p>For all Orders Over $100</p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="py-3">
          <img src={Returns} alt="Returns_Logo" />
        </div>
        <div>
          <h1 className="pl-8">30 Days Returns</h1>
          <p>For an Exchange Product</p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="py-3">
          <img src={Secured} alt="Secured_Logo" />
        </div>
        <div>
          <h1 className="pl-7">Secured Payment</h1>
          <p>Payment Cards Accepted</p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="py-3">
          <img src={Support} alt="Support_Logo" />
        </div>
        <div>
          <h1 className="pl-5">Support 24/7</h1>
          <p>Contact us Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
