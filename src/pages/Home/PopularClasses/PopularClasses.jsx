import useClasses from "../../../hooks/useClasses";
import ClassCard from "../../Shared/ClassCard/ClassCard";

const PopularClasses = () => {
  const [classes] = useClasses();
  // console.log(classes);
  // const popular = classes.filter((cls) => cls.category === "popular");

  return (
    <div>
      <h2 className="text-xl md:text-3xl font-semibold md:py-4 mt-10 text-center">
        Popular Classes
      </h2>
      <p className="text-center mx-2 mb-4">
        Discover our most popular art classes, where creativity comes to life!
        Join our talented instructors and explore a world of colors, techniques,
        and artistic expression.
      </p>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-6">
        {classes.map((cls) => (
          <ClassCard key={cls._id} cls={cls} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
