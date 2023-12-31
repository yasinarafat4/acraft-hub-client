import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";
import useSelectedClasses from "../../../hooks/useSelectedClasses";

const ClassCard = ({ cls }) => {
  const { _id, image, name, instructor, availableSeats, students, price } = cls;
  const { user } = useAuth();
  const [, refetch] = useSelectedClasses();
  const navigate = useNavigate();
  const location = useLocation();

  // Select class handler
  const handleSelectClass = ({ cls }) => {
    console.log(cls);
    if (user && user.email) {
      const selectedCls = {
        classId: _id,
        image,
        name,
        instructor,
        availableSeats,
        students,
        price,
        email: user.email,
      };
      fetch("https://acraft-hub-server.vercel.app/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedCls),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire("Good job!", "Class selected successfully", "success");
          }
        });
    } else {
      Swal.fire({
        title: "Please login as Student",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <Fade duration={1500}>
      <div
        className={`w-11/12 ml-4 lg:ml-0 lg:max-w-md mx-auto rounded overflow-hidden shadow-lg ${
          availableSeats === 0 ? "bg-red-600 text-white" : ""
        }`}
      >
        <img
          className="w-full h-auto object-cover"
          src={image}
          alt="Card image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p
            className={`text-gray-700 text-base mb-2 dark:text-white ${
              availableSeats === 0 ? " text-white" : ""
            }`}
          >
            <span className="font-semibold dark:text-white">Instructor:</span>{" "}
            {instructor}
          </p>
          <p
            className={`text-gray-700 text-base mb-2 dark:text-white ${
              availableSeats === 0 ? " text-white" : ""
            }`}
          >
            <span className="font-semibold">Available Seats:</span>{" "}
            {availableSeats}
          </p>
          <p
            className={`text-gray-700 text-base mb-2 dark:text-white ${
              availableSeats === 0 ? " text-white" : ""
            }`}
          >
            <span className="font-semibold">Students:</span> {students}
          </p>
        </div>
        <div className="flex justify-between items-center px-6 pb-2 dark:text-white">
          <button
            onClick={() => handleSelectClass(cls)}
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={isAdmin || isInstructor || availableSeats === 0}
          >
            Select
          </button>
          <p className="text-gray-700 text-base mb-2 dark:text-white">
            <span className="font-semibold">Price:</span> ${price}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default ClassCard;
