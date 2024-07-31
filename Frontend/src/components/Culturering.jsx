import React from "react";
import Foot from "../assets/images/foot.webp";
import RingPhoto from "../assets/images/moderbanner2.webp";
//Route
import { useNavigate } from "react-router-dom";

const Culturering = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="flex gap-6  w-[80%] p-4 container mx-auto flex-col md:flex-row">
        <div
          className=" h-64 md:h-96  flex  items-center  rounded-md overflow-hidden md:w-[50%]  "
          style={{
            backgroundImage: `url(${Foot})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="ml-11 bg-opacity-75 bg-white p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">
              New Bangles Collection
            </h2>
            <p className="text-sm mb-4">Catch the highlight in the roof</p>
            <button
              className="bg-white text-black py-2 px-4 rounded"
              onClick={handleShopNow}
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div
          className="flex items-center   rounded-md overflow-hidden md:w-[50%]  h-64 md:h-96 "
          style={{
            backgroundImage: `url(${RingPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" bg-white bg-opacity-75 ml-11 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">
              Culture of Ring Design
            </h2>
            <p className="text-sm mb-4">Pasha de Cartier Collection</p>

            <button
              className="bg-white text-black py-2 px-4 rounded"
              onClick={handleShopNow}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culturering;
