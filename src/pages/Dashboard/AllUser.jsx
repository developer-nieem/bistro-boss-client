import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  });


  const updateUserHandler = (user) => {
    fetch(`http://localhost:3000/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount) {
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an admin `,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const deleteUserHandler = () => {

  }
  return (
    <div>
      <h2 className="text-2xl my-4 font-semibold">Total Users : {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map((user , index) => <>
                
                <tr>
                    <th>{index + 1}
                    </th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td> {user.role === "admin" ? <button className="btn">Admin</button> :  <button onClick={ () => updateUserHandler(user)} className="btn btn-success"> <FaUsers></FaUsers> </button>} </td>
                    <td> <button onClick={deleteUserHandler} className="btn btn-error"> <FaTrash></FaTrash> </button> </td>
                  </tr>
                </>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
