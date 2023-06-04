import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {

const [cart] =useCart();

const total = cart.reduce( (sum, item) => sum + item.price , 0)

const price = parseFloat(total.toFixed(2))
    
    return (
        <div className="w-100">
    <SectionTitle heading='Payment' subHeading='this is a payment form'></SectionTitle>

        <Elements stripe={stripePromise}>
            <CheckOutForm cart={cart} price={price}></CheckOutForm>
        </Elements>
        </div>
    );
};

export default Payment;