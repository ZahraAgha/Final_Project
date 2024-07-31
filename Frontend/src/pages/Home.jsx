import React from "react";

import Category from "../components/Category";
import Culturering from "../components/Culturering";
import Fashion from "../components/Fashion";
import Bestsellers from "../components/Bestsellers";
import Uniquestyle from "../components/Uniquestyle";

import Story from "../components/Story";
import Pieces from "../components/Pieces";
import Instagram from "../components/Instagram";
import Sliderback from "../components/Sliderback";

const Home = () => {
  return (
    <div className="  bg-[#F5F5F5]">
      <Sliderback />
      <Category />
      <Culturering />
      <Fashion />
      <Bestsellers />
      <Uniquestyle />

      <Story />
      <Pieces />
      <Instagram />
    </div>
  );
};

export default Home;
