import { useEffect } from "react";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  // Scroll to the top functionality
  const handleGetStarted = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to the top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="featured-item bg-fixed bg-cover text-white py-24 md:py-36 lg:py-40 xl:py-52 mt-12 ">
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl">
          BECOME ONE OF US!
        </h2>
        <p className="text-xs md:text-sm lg:text-xl my-3">
          Take the first step to achieving your dreams.
        </p>
        <div className="my-6 lg:mt-6">
          <button
            onClick={handleGetStarted}
            className="bg-[#133795] text-[#FFFFFF]  hover:bg-[#FFFFFF] hover:duration-500 hover:text-black font-semibold py-2 px-3 md:py-3 md:px-6 xl:py-4 xl:px-10 text-md lg:text-xl mt-4"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
