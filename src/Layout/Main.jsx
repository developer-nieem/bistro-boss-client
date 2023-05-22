import Footer from "../pages/Shared/Footer";
import NavBar from "../pages/Shared/NavBar";
import { Outlet } from "react-router-dom";
const Main = () => {
    return (
        <div>
             <NavBar></NavBar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;