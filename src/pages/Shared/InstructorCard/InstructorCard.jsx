import { Zoom } from "react-awesome-reveal";

const InstructorCard = ({ instructor }) => {
  return (
    <Zoom duration={1500}>
      <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-auto object-cover"
          src={instructor.image}
          alt="Card image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{instructor.name}</div>
          <p className="text-gray-700 text-base mb-2 dark:text-white">
            <span className="font-semibold">Email:</span> {instructor.email}
          </p>
          <p className="text-base dark:text-white">
            <span className="font-semibold">Classes:</span>
            <ol className="list-decimal pl-4">
              {instructor.classes.map((className, index) => (
                <li key={index} className="ml-2">
                  {className}
                </li>
              ))}
            </ol>
          </p>
        </div>
      </div>
    </Zoom>
  );
};

export default InstructorCard;
