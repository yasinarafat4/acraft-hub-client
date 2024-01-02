import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";
const PopularInstructors = () => {
  const [instructors] = useInstructors();
  const popularInstructors = instructors.slice(0, 6);

  return (
    <div>
      {/* Section Title */}
      <SectionTitle
        heading={"Our Popular Instructors"}
        text={
          "Embark on a transformative artistic journey led by renowned instructors who ignite creativity, nurture talent, and guide you towards achieving artistic mastery. Unlock your boundless creativity through the lessons offered by our trusted experts in the field."
        }
      />

      {/* Instructors */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 my-4 lg:ms-6">
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
