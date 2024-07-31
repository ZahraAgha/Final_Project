//bura

// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import './slider1.css';
// import Gold from "../assets/images/goldring.webp";
// import Silver from "../assets/images/silverear.jpg";
// import GoldHeart from "../assets/images/goldheart.webp";
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const Slider1 = () => {
//   return (
//     <div className="slider-container">
//       <div className="thumbnail-container">
//         <img src={Gold} alt="Gold" className="thumbnail" />
//         <img src={Silver} alt="Silver" className="thumbnail" />
//         <img src={GoldHeart} alt="GoldHeart" className="thumbnail" />
//       </div>
//       <Swiper
//         spaceBetween={30}
//         effect={'fade'}
//         navigation={true}
//         pagination={{
//           clickable: true,
//           el: '.custom-pagination',
//         }}
//         modules={[EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={Gold} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Silver} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={GoldHeart} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Silver} />
//         </SwiperSlide>
//       </Swiper>
//       <div className="custom-pagination swiper-pagination"></div>
//     </div>
//   )
// }

// export default Slider1;

// import React from "react";
// import Slider from "react-slick";
// import Gold from "../assets/images/goldring.webp";
// import Silver from "../assets/images/silverear.jpg";
// import GoldHeart from "../assets/images/goldheart.webp";

// function SimpleSlider() {
//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           <img src={[Gold,Silver,GoldHeart][i]} alt={`Thumbnail ${i + 1}`} />
//         </a>
//       );
//     },
//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <img src={Gold} alt="Image 1" />
//         </div>
//         <div>
//           <img src={Silver} alt="Image 2" />
//         </div>
//         <div>
//           <img src={GoldHeart} alt="Image 3" />
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default SimpleSlider;


import React from "react";
import Slider from "react-slick";
import Gold from "../../assets/images/goldring.webp"; // Replace with actual paths
import Silver from "../../assets/images/silverear.jpg"; // Replace with actual paths
import GoldHeart from "../../assets/images/goldheart.webp"; // Replace with actual paths
import "./slider1.css"; // Make sure to import the CSS file

function SimpleSlider() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={[Gold, Silver, GoldHeart][i]} alt={`Thumbnail ${i + 1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="simple-slider-container">
      <Slider {...settings}>
        <div>
          <img src={Gold} alt="Gold Ring" />
        </div>
        <div>
          <img src={Silver} alt="Silver Earring" />
        </div>
        <div>
          <img src={GoldHeart} alt="Gold Heart" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;


