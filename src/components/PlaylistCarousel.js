// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Album from "./Album";

const PlaylistCarousel = ({ children }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    cssEase: "ease-in",
  };
  console.log(this);
  return (
    <div className="max-w-[375px]">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default PlaylistCarousel;
