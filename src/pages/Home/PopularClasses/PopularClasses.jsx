import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import ClassCard from "../../Shared/ClassCard/ClassCard";

const PopularClasses = () => {
  const [classes] = useClasses();
  const approvedClasses = classes.filter((cls) => cls.status === "approve");

  const popularClasses = approvedClasses.slice(0, 6);

  return (
    <div>
      {/* Section Title */}
      <SectionTitle heading={"Popular Classes"} text={"Unlock the vibrant realm of artistic expression with our most popular art classes. Immerse yourself in a captivating journey of colors, techniques, and boundless creativity, guided by our talented instructors who inspire and empower your artistic growth."} />

      {/* Classes */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 my-4 lg:ms-6">
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
