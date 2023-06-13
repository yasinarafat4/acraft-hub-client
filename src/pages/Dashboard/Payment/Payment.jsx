import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClasses from "../../../hooks/useSelectedClasses";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [selectedClass] = useSelectedClasses();
  //   const specificPrice = selectedClass.find(
  //     (item) => item.price === "specificPriceValueNotAppear"
  //   );
  //   console.log(specificPrice);

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
