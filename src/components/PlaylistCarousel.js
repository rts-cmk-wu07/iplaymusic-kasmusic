// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Album from "./Album";

const PlaylistCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,

    slidesToScroll: 1,
    variableWidth: true,
    cssEase: "ease-in",
  };
  return (
    <div className="max-w-[375px]">
      <Slider {...settings}>
        <div className="ml-6 mr-6">
          <Album
            src={"./images/playlistcarousel/photo-1545224144-b38cd309ef69.png"}
          ></Album>
        </div>
        <div className="ml-6 mr-6">
          <Album
            src={"./images/playlistcarousel/pexels-photo-949274.png"}
          ></Album>
        </div>
        <div className="ml-6 mr-6">
          <Album
            src={"./images/playlistcarousel/photo-1545224144-b38cd309ef69.png"}
          ></Album>
        </div>
        <div className="ml-6 mr-6">
          <Album
            src={"./images/playlistcarousel/pexels-photo-442540.png"}
          ></Album>
        </div>
      </Slider>
    </div>
  );
};

export default PlaylistCarousel;
