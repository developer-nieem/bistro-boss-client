import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/users");
    return res.json();
  });
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
                    <td>{users.email}</td>
                    <td> <button className="btn btn-success"> <FaUsers></FaUsers> </button> </td>
                    <td> <button className="btn btn-error"> <FaTrash></FaTrash> </button> </td>
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
