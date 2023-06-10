import "./FeaturedSection.css";

const FeaturedSection = () => {
  return (
    <div className="featured-item bg-fixed bg-cover text-white py-36 md:py-40 lg:py-52 xl:py-72 mt-12 ">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
          BECOME ONE OF US!
        </h2>
        <p className="text-xs md:text-sm lg:text-xl my-3">
          Take the first step to achieving your dreams.
        </p>
        <div className="my-6 lg:mt-6">
          <button className="bg-[#133795] text-[#FFFFFF]  hover:bg-[#FFFFFF] hover:duration-500 hover:text-black font-semibold py-2 px-3 md:py-3 md:px-6 xl:py-4 xl:px-10 text-md lg:text-xl mt-4">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
