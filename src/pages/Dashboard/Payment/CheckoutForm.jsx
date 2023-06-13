import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error("Payment Error: " + error.message);
      console.log("Payment Error", error);
    } else {
      toast.success("Payment Successful");
      console.log("Payment Method", paymentMethod);
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
        <button type="submit" disabled={!stripe} style={buttonStyle}>
          Pay
        </button>
        <ToastContainer />
      </form>
    </>
  );
};

export default CheckoutForm;
