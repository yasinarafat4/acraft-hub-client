import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const selectedClass = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>ACraft | Payment</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckoutForm selectedClass={selectedClass}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
