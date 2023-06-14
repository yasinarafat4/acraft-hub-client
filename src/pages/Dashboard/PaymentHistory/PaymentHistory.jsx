import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import moment from "moment";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  console.log(paymentHistory);
  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => {
        setPaymentHistory(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>ACraft | Payment History</title>
      </Helmet>
      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:py-4 xl:my-5 mb-3 text-center">
        Payment History
      </h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="uppercase">
            <th className="bg-slate-600 text-white">#</th>
            <th className="bg-slate-600 text-white">Class Name</th>
            <th className="bg-slate-600 text-white">Price</th>
            <th className="bg-slate-600 text-white">Buyer Email</th>
            <th className="bg-slate-600 text-white">Transaction Id</th>
            <th className="bg-slate-600 text-white">Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((history, index) => (
            <tr key={history._id}>
              <td>{index + 1}</td>
              <td>{history.className}</td>
              <td className="text-start">${history.price}</td>
              <td className="text-start">{history.email}</td>
              <td className="text-start">{history.transactionId}</td>
              <td className="text-start">
                {moment(history.date).format("MMMM Do, YYYY h:mm:ss A")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
