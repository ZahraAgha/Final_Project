



import React from "react";
import Slider from "react-slick";
import GoldRing from "../assets/images/goldring.webp";
import SilverRing from "../assets/images/silverring.webp";
import PandoraNeck from "../assets/images/pannecklace.webp";
import CrossBracelet from "../assets/images/crossgoldbrac.webp";
import RoseEarring from "../assets/images/roseearrings.webp";
import RosePandoraB from "../assets/images/rosepanbracelt.webp";
import GoldHeart from "../assets/images/goldheart.webp";
import { IoStar } from "react-icons/io5";

const Bestsellers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    { src: GoldRing, alt: "Gold-Ring", title: "CHAMPION", description: "Reflections Gold Rings" },
    { src: SilverRing, alt: "Silver-Ring", title: "CHAMPION", description: "Reflections Gold Rings" },
    { src: PandoraNeck, alt: "Pandora_Necklace", title: "CHAMPION", description: "Reflections Gold Rings" },
    { src: CrossBracelet, alt: "Bracelet", title: "CHAMPION", description: "Reflections Gold Rings" },
    { src: RosePandoraB, alt: "Earrings", title: "CHAMPION", description: "Reflections Gold Rings" },
    { src: GoldHeart, alt: "Earrings", title: "CHAMPION", description: "Reflections Gold Rings" },
    { src: RoseEarring, alt: "Earrings", title: "CHAMPION", description: "Reflections Gold Rings" },
  ];

  return (
    <div className="container p-4 mx-auto bg-[#F5F5F5] mb-5 ">
      <div className="flex flex-col items-center py-12">
        <h2 className="text-[50px] ">Our Bestsellers</h2>
        <p className="text-xl text-[#555555]">Collect your loves with our newest arrivals.</p>
      </div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col text-center">
            <div className="flex justify-center">
              <img className="w-full h-80 object-cover" src={item.src} alt={item.alt} />
            </div>
            <div className="text flex-col items-center mt-4">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <p>{item.description}</p>
              <span className="flex justify-center">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bestsellers;


