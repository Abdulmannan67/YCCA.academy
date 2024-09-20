// components/PaymentForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Form = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

 

  return (
  <>
      <div>
        <label>
          Card details
          <CardElement />
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
      </>
  );
};

export default Form;
