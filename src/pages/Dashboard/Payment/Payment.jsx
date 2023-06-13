import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO: provide pk
const stripePromise = loadStripe();

const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>ACraft | Payment</title>
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
