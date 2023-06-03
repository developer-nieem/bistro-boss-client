import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import { useState } from "react";


const CheckOutForm = () => {
        const stripe =  useStripe();
        const elements =  useElements();

        const [showError , setShowError] = useState('');

        const handleSubmit = async(event) => {
            event.preventDefault();

            if (!stripe || !elements) {
                return
            }

            const card = elements.getElement(CardElement);
            if (card === null) {
                return
            }

            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card,
              });
          
              if (error) {
                console.log('[error]', error);
                setShowError(error.message)
              } else {
                console.log('[PaymentMethod]', paymentMethod);
                
              }

        }
    return (
        <div className="w-2/3 mx-auto my-9">
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary my-5" type="submit" disabled={!stripe}>
        Pay
      </button>
     
    </form>
    <p className="text-red-600"> {showError}</p>
        </div>
    );
};

export default CheckOutForm;