import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu/OurMenu";
import OrderFood from "../pages/OrderFood/OrderFood/OrderFood";
import Login from "../pages/Profile/Login";
import Register from "../pages/Profile/Register";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/order/:category',
          element: <PrivateRoute><OrderFood></OrderFood></PrivateRoute>
        }
      ]
    },
    {
      path:'/login',
      element: <Login></Login>
    },
    {
      path:'/register',
      element: <Register></Register>
    }
  ]);