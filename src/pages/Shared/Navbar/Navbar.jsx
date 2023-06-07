import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/Acraft_hub.png";
import "./Navbar.css";
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { useState, useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const isNavLinkActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  const navItems = (
    <>
      <li className={isNavLinkActive("/")}>
        <Link to="/">Home</Link>
      </li>
      <li className={isNavLinkActive("/instructors")}>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className={isNavLinkActive("/classes")}>
        <Link>Classes</Link>
      </li>
      {user && (
        <li className={isNavLinkActive("/dashboard")}>
          <Link>Dashboard</Link>
        </li>
      )}
      <div className="flex items-center">
        {/*  Logout Button */}
        {user ? (
          <>
            <button className="btn-logout">Log Out</button>
            <img
              className="rounded-full"
              title="User"
              style={{
                width: "40px",
                height: "40px",
                margin: "10px",
                border: "2px solid gray",
              }}
              src="https://picsum.photos/200/300"
              alt=""
            />
          </>
        ) : (
          <>
            <Link to="/login">
              {" "}
              {/* Login Button  */}
              <button className=" bg-[#133795] hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-500">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="shadow-md w-full p-2">
      <div className="lg:flex items-center justify-between bg-white py-1 lg:px-10 px-7">
        <div>
          <span className="mr-1 pt-2">
            <Link to="/">
              <img className="h-28" src={logo} alt="" />
            </Link>
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? <MdClose></MdClose> : <LuMenu></LuMenu>}
        </div>
        <ul
          id="navbar"
          className={`lg:flex items-center gap-6 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 pb-2 transition-all duration-500 ease-in space-y-4 lg:space-y-0 ${
            open ? "top-40" : "top-[-100px]"
          }`}
        >
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
