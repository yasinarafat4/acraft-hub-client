import useClasses from "../../../hooks/useClasses";

const PopularClasses = () => {
  const [classes] = useClasses();
  console.log(classes);
  // const popular = classes.filter((class) => class.category === "popular");
  const popular = classes.filter((cls) => cls.category === "popular");

  return (
    <div>
      <h2 className="text-xl md:text-3xl font-semibold py-2 md:py-4 mt-10 mb-3 text-center">
        Popular Classes
      </h2>
      <div>
        {popular.map((cls) => (
          <p key={cls._id}>{cls.name}</p>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
