import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carosal = () => {
  const sliderRef = useRef(null);

  // Custom arrow components for the slider
  const PrevArrow = ({ onClick }) => (
    <button
      className="slick-arrow slick-prev  ml-10 "
      onClick={onClick}
      aria-label="Previous slide"
      style={{ zIndex: 1 }} // Adjust z-index here
    >
      <FaChevronLeft className="text-black text-3xl" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="slick-arrow slick-next mr-10"
      onClick={onClick}
      aria-label="Next slide"
      style={{ zIndex: 1 }} // Adjust z-index here
    >
      <FaChevronRight className="text-black text-3xl" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
  };

  return (
    <div className="relative mt-4 w-11/12 m-auto ">
      <Slider ref={sliderRef} {...settings}>
        <div>
          
          <img src="https://wallpaperaccess.com/full/43696.jpg" alt="Landscape" className="w-full md:h-[24rem] lg:h-[54rem]" />
        </div>
        <div>
          <img src="https://www.wallpaperflare.com/static/930/364/58/minjae-lee-artwork-face-colorful-wallpaper.jpg" alt="Cityscape" className="w-full md:h-[24rem] lg:h-[54rem]" />
        </div>
        <div>
          <img src="https://www.wallpaperflare.com/static/496/725/184/colorful-women-minjae-lee-face-wallpaper.jpg" alt="Beach" className="w-full md:h-[24rem] lg:h-[54rem]" />
        </div>
    
      </Slider>
    </div>
  );
};

export default Carosal;
