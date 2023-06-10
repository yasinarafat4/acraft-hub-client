import { Slide } from "react-awesome-reveal";

const ClassCard = ({ cls }) => {
  return (
    <Slide duration={1500}>
      <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-auto object-cover"
          src={cls.image}
          alt="Card image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{cls.name}</div>
          <p className="text-gray-700 text-base mb-2 dark:text-white">
            <span className="font-semibold dark:text-white">Instructor:</span>{" "}
            {cls.instructor}
          </p>
          <p className="text-gray-700 text-base mb-2 dark:text-white">
            <span className="font-semibold">Available Seats:</span>{" "}
            {cls.availableSeats}
          </p>
          <p className="text-gray-700 text-base dark:text-white">
            <span className="font-semibold">Students:</span> {cls.students}
          </p>
        </div>
        <div className="flex justify-between items-center px-6 pb-2 dark:text-white">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Select
          </button>
          <p className="text-gray-700 text-base mb-2 dark:text-white">
            <span className="font-semibold">Price:</span> ${cls.price}
          </p>
        </div>
      </div>
    </Slide>
  );
};

export default ClassCard;
