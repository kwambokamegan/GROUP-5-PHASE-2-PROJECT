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
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image:'https://jenmansafaris.com/wp-content/uploads/2014/08/Mount-Kenya.jpg',
      text:'Find your next',
      highlight: 'Safari',
      subText: 'Get the most adventurous and mind-blowing experience with the best deals',
    },
    {
      image:'https://samburunationalreservekenya.com/wp-content/uploads/2023/05/NNP-Weekend-deal-for-Site.jpg',
      text:'Find your next',
      highlight: 'Safari',
      subText: 'Get the most adventurous and mind-blowing experience with the best deals',
    },
    {
      image:'https://www.kenya-experience.com/wp-content/gallery/south-coast/Nomad-31.jpg',
      text:'Find your next',
      highlight: 'Safari',
      subText: 'Get the most adventurous and mind-blowing experience with the best deals',
    },
    {
      image:'https://banoksafaris.com/wp-content/uploads/2024/03/Lake-Naivasha_0010_shutterstock_344974034.jpg',
      text:'Find your next',
      highlight: 'Safari',
      subText: 'Get the most adventurous and mind-blowing experience with the best deals',
    },
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
            <div className="slide-text">
              <div>{slide.text}</div>
              <div><span>{slide.highlight}</span></div>
              <div className="sub-text">{slide.subText}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
