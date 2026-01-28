import Slider from "react-slick";
import { bgImages } from "../data/image-data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Swiper.css';

export function Swiper() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrow: false,
  }

  bgImages.forEach((i) => {
    console.log(i.image)
  });

  return (
    <Slider {...settings} className="swiper-container">
      {bgImages.map((image) => (
        <div key={image.id}
            className="slide-content background-image-container" style={{
            backgroundImage: `url(${image.image})`
          }}>
        </div>
      ))}
    </Slider>
  );
}

export default Swiper;