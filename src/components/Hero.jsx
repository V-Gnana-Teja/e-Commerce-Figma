import React, { useState } from 'react';
import Img1 from '../assets/images/Rectangle 5.png';
import Img2 from '../assets/images/image 3 (3).png';
import Img3 from '../assets/images/image 3 (4).png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const images = [Img1, Img2, Img3];

  return (
    <div className="relative flex justify-center items-center h-[400px]">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt="/" className="absolute object-cover" />
          </div>
        ))}
      </Slider>

      <div className="z-10 text-left text-white p-4 lg:p-8">
        <h1 className="text-3xl ml-14 font-bold">Best Deal Online on smart watches</h1>
        <p className="mt-2 mr-[400px]">SMART WEARABLE.</p>
        <p className="mt-2">Current Slide: {currentSlide + 1}</p>
      </div>
    </div>
  );
};

export default Hero;
