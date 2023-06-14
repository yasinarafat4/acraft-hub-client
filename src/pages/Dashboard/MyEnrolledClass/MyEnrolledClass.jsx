import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const MyEnrolledClass = () => {
  const [enrolledClass, setEnrolledClass] = useState([]);
  console.log(enrolledClass);
  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClass(data);
      });
  }, []);

  return (
    <div>
      <div className="w-11/12 overflow-y-auto">
        <Helmet>
          <title>ACraft | Enrolled Classes</title>
        </Helmet>
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mb-3 text-center">
          Enrolled Classes
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th className="bg-slate-600 text-white">#</th>
                <th className="bg-slate-600 text-white">Class Image</th>
                <th className="bg-slate-600 text-white">Class Name</th>
                <th className="bg-slate-600 text-white">Price</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClass.map((cls, index) => (
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
                  <td className="text-start">${cls.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
