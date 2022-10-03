// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Album from "./Album";

const PlaylistCarousel = ({ children, setPlaylistIndex }) => {
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
  function swipeHandler(i) {
    setPlaylistIndex(i);
  }
  return (
    <div className="max-w-[375px]">
      <Slider {...settings} afterChange={swipeHandler}>
        {children}
      </Slider>
    </div>
  );
};

export default PlaylistCarousel;
