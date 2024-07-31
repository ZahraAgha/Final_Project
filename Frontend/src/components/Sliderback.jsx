
import React from "react";
import Slider from "react-slick";
import Slider1 from "../assets/images/slider1.webp";
import Slider2 from "../assets/images/slider2.webp";
import "./sliderback.css";  // Use relative path correctly

const arrowStyle = {
  width: '40px',
  height: '40px',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '50%',
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  opacity: 1, /* Ensure they are visible */
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyle, right: '10px' }}  // Inline style
      onClick={onClick}
    >
      ›
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyle, left: '10px' }}  // Inline style
      onClick={onClick}
    >
      ‹
    </div>
  );
}

function Sliderback() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 306,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img
            className="slider-image"
            src={Slider1}
            alt="Abstract 01"
          />
          <div className="overlay">
            <h1>Personalize your choker.</h1>
            <p>Create a custom ring as unique as your love.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="slider-item">
          <img
            className="slider-image"
            src={Slider2}
            alt="Abstract 02"
          />
          <div className="overlay">
            <h1>Grace Designer Collection</h1>
            <p>A symbol of love and a modern take on gold.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Sliderback;
