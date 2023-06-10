import { Link } from "react-router-dom";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";
const PopularInstructors = () => {
  const [instructors] = useInstructors();
  const popularInstructors = instructors.slice(0, 6);

  return (
    <div>
      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mt-10 xl:mt-14 text-center">
        Popular Instructors
      </h2>
      <p className="text-center text-sm lg:text-lg  xl:text-xl mx-2 mb-4">
        Embark on a transformative artistic journey led by renowned instructors
        who ignite creativity, nurture talent, and guide you towards achieving
        artistic mastery. Unlock your boundless creativity through the lessons
        offered by our trusted experts in the field.
      </p>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-6">
        {popularInstructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
      <div className="text-center mb-6">
        <Link to="/instructors">
          {" "}
          <button className=" bg-[#133795] hover:bg-violet-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline duration-500">
            See All Instructors
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
