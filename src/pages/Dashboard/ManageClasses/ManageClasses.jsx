import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [classes, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
  const handleDeny = (cls) => {
    console.log(cls);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${cls._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Denied!", "Class has been denied.", "success");
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
                  <button
                    title="Click here to Approve"
                    className="p-2 text-white bg-[#133795] border-none rounded"
                  >
                    {" "}
                    Pending
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeny(cls)}
                    className="text-center p-2 text-white bg-[#f14e4c] border-none rounded"
                  >
                    {" "}
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
