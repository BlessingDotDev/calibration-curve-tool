import Slider from "react-slick";
import { messages } from "../data/messages.js";
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

  return (
    <Slider {...settings} className="swiper-container">
      {messages.map((message) => (
        <p key={message.id} className="title">
          {message.message}
        </p>
      ))}
    </Slider>
  );
}

export default Swiper;