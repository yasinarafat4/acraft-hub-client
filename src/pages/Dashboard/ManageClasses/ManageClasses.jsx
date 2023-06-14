import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";

const ManageClasses = () => {
  const [classes, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();

  // Delete handler
  const handleDelete = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${cls._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Class has been deleted.", "success");
          }
        });
      }
    });
  };

  // Class Approve handler
  const handleClassApprove = (cls) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://acraft-hub-server.vercel.app/classes/${cls._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "approve" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Approved!", "Class has been Approved.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>ACraft | Manage Classes</title>
      </Helmet>
      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mb-3 text-center">
        Manage Classes
      </h2>
      <div className="ms-6 w-11/12 overflow-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th className="bg-slate-600 text-white">#</th>
              <th className="bg-slate-600 text-white">Class Image</th>
              <th className="bg-slate-600 text-white">Class Name</th>
              <th className="bg-slate-600 text-white">Instructor Name</th>
              <th className="bg-slate-600 text-white">Instructor Email</th>
              <th className="bg-slate-600 text-white">Price</th>
              <th className="bg-slate-600 text-white">Available seats</th>
              <th className="bg-slate-600 text-white">Status</th>
              <th className="bg-slate-600 text-white">Status</th>
              <th className="bg-slate-600 text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cls.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{cls.name}</td>
                <td>{cls.instructor}</td>
                <td>{cls.email}</td>
                <td className="text-center">${cls.price}</td>
                <td className="text-center">{cls.availableSeats}</td>
                <td>
                  {cls.status === "approve" ? (
                    <button className="p-2 text-white bg-[#2ebd5d] border-none rounded">
                      Approved
                    </button>
                  ) : (
                    <button
                      onClick={() => handleClassApprove(cls)}
                      title="Click here to Approve"
                      className="p-2 text-white bg-[#133795] border-none rounded"
                    >
                      {" "}
                      Pending
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => window.my_modal_3.showModal()}
                    className="text-center p-2 text-white bg-[#f14e4c] border-none rounded"
                  >
                    {" "}
                    Deny
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(cls)}
                    className="text-center p-2 text-white bg-[#f14e4c] border-none rounded"
                  >
                    {" "}
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TODO: Functionality not applied */}
      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0">
            ✕
          </button>
          <div>
            <textarea
              className="w-full h-32 px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your feedback"
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
