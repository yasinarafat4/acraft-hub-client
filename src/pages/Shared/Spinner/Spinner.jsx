import { FadeLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <FadeLoader size={300} color="red" />
    </div>
  );
};

export default Spinner;
