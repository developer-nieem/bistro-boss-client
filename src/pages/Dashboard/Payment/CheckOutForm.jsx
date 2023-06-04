import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Login from "../../Profile/Login";
import axios from "axios";


const CheckOutForm = ({cart, price}) => {
        const stripe =  useStripe();
        const elements =  useElements();
        const [clientSecret, setClientSecret] = useState("");
        const [showError , setShowError] = useState('');
        const {user} = useContext(AuthContext);
        const [processing, setProcessing] = useState(false);
        

        useEffect(() => {
           
            axios.post('http://localhost:3000/create-payment-intent', { price })
            .then(res => {
            
                setClientSecret(res.data.clientSecret);
            })


          }, []);


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
              setProcessing(true)

              const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(
                clientSecret ,
                {
                  payment_method: {
                    card: card,
                    billing_details: {
                      name: user?.displayName || 'unknown',
                      email: user?.email || 'unknown',
                    },
                  },
                },
              );

              if (confirmError) {
                console.log(confirmError);
              }
              setProcessing(false)
              if (paymentIntent?.status === "succeeded") {
                const transaction =  paymentIntent?.id
                setShowError(`Transaction Complete and  Your transaction ID :  ${transaction}`)

                const payment =  {
                    email : user.email,
                    transactionId : paymentIntent?.id,
                    price,
                    quantity: cart.length,
                    ItemsName : cart.map(item => item.name),
                    ItemsId : cart.map(item => item._id),

                }
                axios.post('http://localhost:3000/payment',  payment )
            .then(res => {
            
                if (res.data.insertedId) {
                    console.log('updated');
                }
            })
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
      <button className="btn btn-primary my-5" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
     
    </form>
    <p className="text-red-600"> {showError}</p>
        </div>
    );
};

export default CheckOutForm;