import { Zoom } from "react-awesome-reveal";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
  return (
    <Zoom duration={1200} triggerOnce>
      <div className="w-11/12 ml-4 lg:ml-0 lg:max-w-md xl:w-full mx-auto rounded h-[455px] overflow-hidden shadow-lg">
        <img
          className="w-full h-auto object-cover"
          src={instructor.image}
          alt="Card image"
        />
        <div className="font-bold text-xl my-2 text-center">
          {instructor.name}
        </div>
        <div className="grid grid-cols-2 justify-center px-2">
          <div>
            <p className="text-gray-700 text-base mb-2 dark:text-white">
              <span className="font-semibold">Email:</span> {instructor.email}
            </p>
            <div className="flex gap-2 justify-evenly items-center">
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="text-base dark:text-white">
            <span className="font-semibold">Classes:</span>
            <ol className="list-decimal pl-4">
              {instructor.classes.map((className, index) => (
                <li key={index} className="ml-2">
                  {className}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default InstructorCard;
