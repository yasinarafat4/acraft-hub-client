import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import Classes from "../pages/Classes/Classes";
import ContactUs from "../pages/ContactUs/ContactUs";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import DashHome from "../pages/Dashboard/DashHome/DashHome";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/dashHome",
        element: <DashHome />,
      },
      // Student Routes
      {
        path: "/dashboard/mySelectedClasses",
        element: <MySelectedClasses />,
      },
      {
        path: "/dashboard/myEnrolledClasses",
        element: <MyEnrolledClass />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://acraft-hub-server.vercel.app/selectedClasses/${params.id}`
          ),
      },

      // Admin Routes
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },

      // Instructor Routes
      {
        path: "/dashboard/addClass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/myClasses",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
    ],
  },
]);
