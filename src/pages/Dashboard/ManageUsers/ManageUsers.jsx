import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const response = await axiosSecure.get("/users");
    return response.data;
  });

  // Delete user handler
  const handleDeleteUser = (user) => {
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
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted data", data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };

  // Make Admin handler
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  // Make Instructor handler
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="xl:w-full xl:mx-auto mx-4">
        <Helmet>
          <title>ACraft | Manage Users</title>
        </Helmet>
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mt-10 mb-3 xl:mt-14">
          Total Users: {users.length}
        </h2>
        <div className="overflow-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th className="bg-slate-600 text-white">#</th>
                <th className="bg-slate-600 text-white">Name</th>
                <th className="bg-slate-600 text-white">Email</th>
                <th className="bg-slate-600 text-white">Make Instructor</th>
                <th className="bg-slate-600 text-white">Make Admin</th>
                <th className="bg-slate-600 text-white">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td className="text-center">
                    {user.role === "instructor" ? (
                      <p className="text-[#133795] font-bold">Instructor</p>
                    ) : (
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className=" p-2 text-white bg-slate-600 border-none rounded"
                      >
                        {" "}
                        <FaUser />
                      </button>
                    )}
                  </td>
                  <td className="text-center">
                    {user.role === "admin" ? (
                      <p className="text-green-600 font-bold">Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className=" p-2 text-white bg-[#133795]  border-none rounded"
                      >
                        {" "}
                        <FaUser />
                      </button>
                    )}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className=" p-2 text-white bg-[#f14e4c] border-none rounded"
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
      </div>
    </div>
  );
};

export default ManageUsers;
