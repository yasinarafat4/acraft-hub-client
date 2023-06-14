import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ selectedClass }) => {
  console.log(selectedClass);
  const { price, name, classId, _id } = selectedClass;
  console.log(price);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error("Payment Error: " + error.message);
    } else {
      toast.success("Payment Successful");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const paymentHistory = {
        className: name,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        singleClassId: _id,
        classId: classId,
      };
      axiosSecure.post("/payments", paymentHistory).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // Swal
        }
      });
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#123",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const formStyle = {
    marginBottom: "20px",
    width: "400px",
    padding: "50px",
    margin: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "5px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <>
      <h2 className="text-center font-bold text-2xl mb-4 mt-10">
        Pay to Enroll
      </h2>
      <form
        className="text-center border shadow-xl rounded"
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <div style={{ marginBottom: "10px" }}>
          <CardElement options={cardElementOptions} />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          style={buttonStyle}
        >
          Pay
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default CheckoutForm;
