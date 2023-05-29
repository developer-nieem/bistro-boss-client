import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
            <li>
            <NavLink to='admin'>User Home </NavLink>
            </li>
            <li>
              <NavLink to='/'>Reservation</NavLink>
            </li>
            <li>
              <NavLink to='/'>Payment History</NavLink>
            </li>
            <li>
              <NavLink to='manageItem'>My Cart</NavLink>
            </li>
            <li>
              <NavLink to='/'>Add review</NavLink>
            </li>
            <li>
              <NavLink to='/'>My Booking</NavLink>
            </li>
            <div className="divider border-gray-50 text-white"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
