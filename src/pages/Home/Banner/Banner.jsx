import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";


const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/jhtBF24/banner-1.jpg",
      title: "Art Craft Hub",
      des: "Explore a collection of beautiful artworks and crafts with us.",
    },
    {
      img: "https://i.ibb.co/3NjgFVG/banner-2.jpg",
      title: "Unleash Your Creativity",
      des: "Discover inspiration and ignite your imagination with our diverse range of art and craft creations.",
    },
    {
      img: "https://i.ibb.co/yPg8y6L/banner-3.jpg",
      title: "Elevate Your Space",
      des: "Enhance your surroundings with exquisite artworks and handcrafted decor that reflect your unique style.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlider((currentSlider) =>
        currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
    <>
      <div
        className="w-full h-96 md:h-[540px] lg:h-[640px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 duration-1000 transform ease-linear z-10"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        <div className="absolute left-0 top-0 inset-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] flex flex-col justify-center w-3/4 md:w-2/3 text-start ps-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-1 md:mb-4 mt-16 md:mt-0">
            {sliders[currentSlider].title}
          </h2>
          <p className="text-sm md:text-lg mb-3 md:mb-6">
            {sliders[currentSlider].des}
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

      <div className="flex justify-center items-center gap-3 p-2 ease-linear duration-500">
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`h-[50px] min-w-[80px] ${
              currentSlider === inx ? "border-2 border-black p-[2px]" : ""
            } rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </>
  );
};

export default Banner;
