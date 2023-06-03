import { FaTrash } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [cart , refetch] = useCart();

  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
  console.log(item._id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:3000/carts/${item._id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }

  return (
    <div className="w-full p-10">
      <div className="overflow-x-auto mt-96 ">
        <div className="flex justify-between">
          <h1 className="text-2xl my-3 font-medium"> Total Items {cart.length}</h1>
          <h1 className="text-2xl my-3 font-medium"> Total price: ${total}</h1>
          <p><Link to='/admin/payment' className="btn btn-success">Pay</Link></p>
        </div>

        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item)} className="btn btn-error btn-circle ">
                      {" "}
                      <FaTrash></FaTrash>{" "}
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
