import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

import img1 from "../../../assets/images/banner/banner.jpg";
import img2 from "../../../assets/images/banner/banner2.jpg";
import img3 from "../../../assets/images/banner/banner3.jpg";
import img4 from "../../../assets/images/banner/banner4.jpg";
import img5 from "../../../assets/images/banner/banner5.jpg";

const Banner = () => {
  const imageStyles = {
    maxHeight: "750px",
    maxWidth: "1350px",
  };

  return (
    <div className="md:text-center">
      <Carousel>
        <div>
          <img src={img1} alt="Banner 1" style={imageStyles} />
        </div>
        <div>
          <img src={img2} alt="Banner 2" style={imageStyles} />
        </div>
        <div>
          <img src={img3} alt="Banner 3" style={imageStyles} />
        </div>
        <div>
          <img src={img4} alt="Banner 4" style={imageStyles} />
        </div>
        <div>
          <img src={img5} alt="Banner 5" style={imageStyles} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
