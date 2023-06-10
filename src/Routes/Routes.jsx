import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Classes";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: (
          <PrivateRoute>
            <Instructors></Instructors>
          </PrivateRoute>
        ),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/mySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "/dashboard/myEnrolledClasses",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
