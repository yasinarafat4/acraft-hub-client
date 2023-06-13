import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../hooks/useSelectedClasses";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [selectedClass] = useSelectedClasses();
  const price = selectedClass.map((item) => item.price);
  console.log(price);
  return (
    <div>
      <Helmet>
        <title>ACraft | Payment</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
