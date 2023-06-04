import {
  FaBars,
  FaBook,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {

  const [isAdmin] = useAdmin();
  
  console.log(isAdmin);

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="admin">
                    {" "}
                    <FaHome></FaHome>Admin Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    {" "}
                    <FaUtensils></FaUtensils> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    {" "}
                    <FaWallet></FaWallet> Manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageItem">
                    {" "}
                    <FaBook></FaBook> Manage bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="users">
                    {" "}
                    <FaUsers></FaUsers> All users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="userhome">
                    <FaHome></FaHome>User Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">Reservation</NavLink>
                </li>
                <li>
                  <NavLink to="/">Payment History</NavLink>
                </li>
                <li>
                  <NavLink to="manageItem">My Cart</NavLink>
                </li>
                <li>
                  <NavLink to="/">Add review</NavLink>
                </li>
                <li>
                  <NavLink to="/">My Booking</NavLink>
                </li>
              </>
            )}
            <div className="divider border-gray-50 text-white"></div>

            <li>
              <NavLink to="/">
                {" "}
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaBars></FaBars> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                {" "}
                <FaShoppingBag></FaShoppingBag> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                {" "}
                <FaEnvelope></FaEnvelope> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
