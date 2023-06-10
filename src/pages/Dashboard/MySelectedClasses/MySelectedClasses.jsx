import { Helmet } from "react-helmet-async";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import { FaRegTrashAlt, FaRegCreditCard } from "react-icons/fa";

const MySelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClasses();
  const handleDelete = (cls) => {
    console.log(cls);
  };
  return (
    <div className="w-11/12 overflow-y-auto">
      <Helmet>
        <title>ACraft | Selected Classes</title>
      </Helmet>
      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mt-10 xl:mt-14 text-center">
        My Selected Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th className="bg-slate-600 text-white">#</th>
              <th className="bg-slate-600 text-white">Item Image</th>
              <th className="bg-slate-600 text-white">Item Name</th>
              <th className="bg-slate-600 text-white">Price</th>
              <th className="bg-slate-600 text-white">Delete</th>
              <th className="bg-slate-600 text-white">Pay</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((cls, index) => (
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
                <td className="text-end">${cls.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(cls)}
                    className=" p-2 text-white bg-[#f14e4c] border-none rounded"
                  >
                    {" "}
                    <FaRegTrashAlt />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(cls)}
                    className=" p-2 text-white bg-[#133795] border-none rounded"
                  >
                    {" "}
                    <FaRegCreditCard />
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

export default MySelectedClasses;
