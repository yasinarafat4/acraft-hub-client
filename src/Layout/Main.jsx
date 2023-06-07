import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className=" bg-white dark:bg-slate-700 dark:text-white">
      <Navbar></Navbar>
      <div className="max-w-screen-2xl mx-auto min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
