import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import Spinner from "../pages/Shared/Spinner/Spinner";

const Main = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Spinner />;
  }
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
