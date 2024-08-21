import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/img/image1.png";
import image2 from "../assets/img/image2.png";
import image3 from "../assets/img/image3.png";
import image4 from "../assets/img/image4.png";
import image5 from "../assets/img/image5.png";
import image6 from "../assets/img/image6.png";
import image7 from "../assets/img/image7.png";
import image8 from "../assets/img/image8.png";
import image9 from "../assets/img/image9.png";
import image10 from "../assets/img/image10.png";
import image11 from "../assets/img/image11.png";
import image12 from "../assets/img/image12.png";
import image13 from "../assets/img/image13.png";
import image14 from "../assets/img/image14.png";
import image15 from "../assets/img/image15.png";

import "../Image.css" // Importing the new CSS file for custom styling

export const Image = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // Pauses autoplay on hover
  };

  return (
    <div className="image-generation-section">
      <h2 className="slider-title">AI Image Prompt Generation Expert</h2>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="image-slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};