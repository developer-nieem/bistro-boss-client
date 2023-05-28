import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const handelCartFood = (item) => {
    console.log(item);
    if (user) {
      fetch('http://localhost:3000/carts' ,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(item)
      })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
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
