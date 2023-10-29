import { Helmet } from "react-helmet-async";
import classesCover from "../../assets/images/cover/classes-cover.png";
import useClasses from "../../hooks/useClasses";
import ClassCard from "../Shared/ClassCard/ClassCard";
import Cover from "../Shared/Cover/Cover";

const Classes = () => {
  const [classes] = useClasses();

  // Filter classes with "approve" status
  const approvedClasses = classes.filter((cls) => cls.status === "approve");

  return (
    <div>
      <Helmet>
        <title>ACraft | Classes</title>
      </Helmet>
      <Cover
        bgImg={classesCover}
        title={"All Classes"}
        text={"Would you like to see our Classes?"}
      ></Cover>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 my-4 lg:mx-4">
        {approvedClasses.map((cls) => (
          <ClassCard key={cls._id} cls={cls} />
        ))}
      </div>
    </div>
  );
};

export default Classes;
