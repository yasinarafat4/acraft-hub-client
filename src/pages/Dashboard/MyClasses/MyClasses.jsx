import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  return (
    <div>
      <Helmet>
        <title>ACraft | My Classes</title>
      </Helmet>
      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mt-10 mb-3 xl:mt-14 text-center">
        My Classes
      </h2>
    </div>
  );
};

export default MyClasses;
