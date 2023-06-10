import useClasses from "../../../hooks/useClasses";
import ClassCard from "../../Shared/ClassCard/ClassCard";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [classes] = useClasses();
  const popularClasses = classes.slice(0, 6);

  return (
    <div>
      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mt-10 xl:mt-14 text-center">
        Popular Classes
      </h2>
      <p className="text-center text-sm lg:text-lg  xl:text-xl mx-2 mb-4">
        Unlock the vibrant realm of artistic expression with our most popular
        art classes. Immerse yourself in a captivating journey of colors,
        techniques, and boundless creativity, guided by our talented instructors
        who inspire and empower your artistic growth.
      </p>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-6">
        {popularClasses.map((cls) => (
          <ClassCard key={cls._id} cls={cls} />
        ))}
      </div>
      <div className="text-center mb-6">
        <Link to="/classes">
          {" "}
          <button className=" bg-[#133795] hover:bg-violet-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline duration-500">
            See All Classes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
