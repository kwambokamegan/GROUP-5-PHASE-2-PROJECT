import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; 

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const images = [
    'https://jenmansafaris.com/wp-content/uploads/2014/08/Mount-Kenya.jpg',
    'https://samburunationalreservekenya.com/wp-content/uploads/2023/05/NNP-Weekend-deal-for-Site.jpg',
    'https://www.kenya-experience.com/wp-content/gallery/south-coast/Nomad-31.jpg',
    'https://banoksafaris.com/wp-content/uploads/2024/03/Lake-Naivasha_0010_shutterstock_344974034.jpg',
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
