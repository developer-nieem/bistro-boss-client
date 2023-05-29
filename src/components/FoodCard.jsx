import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const [, refetch] = useCart()

  const handelCartFood = (item) => {
    console.log(item);
    const orderItem =  {menuId : _id , name, recipe, image, price, email:user.email }
    if (user && user.email) {
      fetch('http://localhost:3000/carts' ,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          refetch();
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added the Cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }else{
      Swal.fire({
        title: 'Please Login',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }

  };

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <img
          className="image-full h-64 rounded-l-lg rounded-r-lg"
          src={image}
          alt="Shoes"
        />
        <p className="bg-slate-950 text-white absolute right-0 mr-5 mt-3 rounded-lg p-1">
          {" "}
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title justify-center">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={() => handelCartFood(item)} className="btn  bg-slate-400 border-0 border-b-4">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
