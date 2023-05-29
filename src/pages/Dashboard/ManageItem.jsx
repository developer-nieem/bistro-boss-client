import { FaTrash } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const ManageItem = () => {
  const [cart] = useCart();

  console.log(cart);
  const total =  cart.reduce((sum , item) => item.price + sum , 0)
  return (
    <div>
      <div className="overflow-x-auto w-[800px]">
       <div className="flex justify-between">
       <h1 className="text-2xl my-3 font-medium"> Total Items {cart.length}</h1>
        <h1 className="text-2xl my-3 font-medium"> Total price: ${total}</h1>
        <p><button className="btn btn-success">Pay</button></p>
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
            {cart.map((item , index) => (
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
                    <button className="btn btn-error btn-circle ">
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
