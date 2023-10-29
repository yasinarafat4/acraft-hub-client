import { Helmet } from "react-helmet-async";
import instructorsCover from "../../assets/images/cover/instructors-cover.png";
import useInstructors from "../../hooks/useInstructors";
import Cover from "../Shared/Cover/Cover";
import InstructorCard from "../Shared/InstructorCard/InstructorCard";

const Instructors = () => {
  const [instructors] = useInstructors();

  return (
    <div>
      <Helmet>
        <title>ACraft | Instructors</title>
      </Helmet>
      <Cover
        bgImg={instructorsCover}
        title={"All Instructors"}
        text={"Would you like to see our best and experienced Instructors?"}
      ></Cover>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2 my-4 mr-4 lg:mx-4">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
