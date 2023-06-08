import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import { Link } from "react-router-dom";

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
        {/* Slider 1 */}
        <div className="relative">
          <img src={img1} alt="Banner 1" style={imageStyles} />
          <div className="absolute left-0 top-0 inset-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center w-3/4 md:w-2/3 text-start ps-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
              Art Craft Hub
            </h2>
            <p className="md:text-lg mb-6">
              Explore a collection of beautiful artworks and crafts with us.
            </p>
            <div className="space-x-4">
              <Link to="/classes">
                <button className="btn-classes">Our Classes</button>
              </Link>
              <Link to="/Instructors">
                {" "}
                <button className="btn-instructors">Instructors</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider 2 */}
        <div className="relative">
          <img src={img2} alt="Banner 1" style={imageStyles} />
          <div className="absolute left-0 top-0 inset-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center w-3/4 md:w-2/3 text-start ps-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
              Unleash Your Creativity
            </h2>
            <p className="md:text-lg mb-6">
              Discover inspiration and ignite your imagination with our diverse
              range of art and craft creations.
            </p>
            <div className="space-x-4">
              <Link to="/classes">
                <button className="btn-classes">Our Classes</button>
              </Link>
              <Link to="/Instructors">
                {" "}
                <button className="btn-instructors">Instructors</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider 3 */}
        <div className="relative">
          <img src={img3} alt="Banner 1" style={imageStyles} />
          <div className="absolute left-0 top-0 inset-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center w-3/4 md:w-2/3 lg:w-3/4 text-start ps-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
              Elevate Your Space
            </h2>
            <p className="md:text-lg mb-6">
              Enhance your surroundings with exquisite artworks and handcrafted
              decor that reflect your unique style.
            </p>
            <div className="space-x-4">
              <Link to="/classes">
                <button className="btn-classes">Our Classes</button>
              </Link>
              <Link to="/Instructors">
                {" "}
                <button className="btn-instructors">Instructors</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider 4 */}
        <div className="relative">
          <img src={img4} alt="Banner 1" style={imageStyles} />
          <div className="absolute left-0 top-0 inset-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center w-3/4 md:w-2/3 lg:w-3/4 text-start ps-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
              Celebrate Artistry
            </h2>
            <p className="md:text-lg mb-6">
              Join us in celebrating the creativity and talent of artists from
              around the world through our curated collection.
            </p>
            <div className="space-x-4">
              <Link to="/classes">
                <button className="btn-classes">Our Classes</button>
              </Link>
              <Link to="/Instructors">
                {" "}
                <button className="btn-instructors">Instructors</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Slider 5 */}
        <div className="relative">
          <img src={img5} alt="Banner 1" style={imageStyles} />
          <div className="absolute left-0 top-0 inset-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center w-3/4 md:w-2/3 lg:w-3/4 text-start ps-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">
              Art for Passion
            </h2>
            <p className="md:text-lg mb-6">
              Find art and crafts that resonate with your passions and
              interests, and add a touch of creativity to your life.
            </p>
            <div className="space-x-4">
              <Link to="/classes">
                <button className="btn-classes">Our Classes</button>
              </Link>
              <Link to="/Instructors">
                {" "}
                <button className="btn-instructors">Instructors</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
