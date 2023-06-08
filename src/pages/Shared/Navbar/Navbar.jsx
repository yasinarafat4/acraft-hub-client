import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo/Acraft_hub.png";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  // Dark Or Light Mood effect
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Dark Or Light Mood handler
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsDarkMode(!isDarkMode);
  };

  // Logout functionality
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Active Nav Link
  const isNavLinkActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  // Nav Item
  const navItems = (
    <>
      <li title="Go to Home" className={isNavLinkActive("/")}>
        <Link to="/">Home</Link>
      </li>
      <li title="Instructors" className={isNavLinkActive("/instructors")}>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li title="Our Classes" className={isNavLinkActive("/classes")}>
        <Link to="/classes">Classes</Link>
      </li>
      {user && (
        <li title="Dashboard" className={isNavLinkActive("/dashboard")}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white ">
      <div className="navbar-start md:ps-2">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content space-y-4 p-2 shadow bg-opacity-70 bg-black text-xl text-white rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img className="h-28 md:h-32" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1  font-bold gap-2 lg:text-lg xl:text-2xl">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end flex gap-1 md:gap-2 font-[600] text-sm xl:text-lg items-center">
        <div className="cursor-pointer">
          {isDarkMode ? (
            <div className="text-xl" onClick={handleThemeSwitch}>
              <BsSun title="Make Light" />
            </div>
          ) : (
            <div className="text-xl" onClick={handleThemeSwitch}>
              <FaMoon title="Make Dark" />
            </div>
          )}
        </div>

        {/*  Logout Button */}
        {user ? (
          <>
            <button
              title="Logout"
              onClick={handleLogOut}
              className="btn-logout"
            >
              Log Out
            </button>
            {user && (
              <img
                className="rounded-full"
                title={user.displayName || "User"}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "10px",
                  border: "2px solid gray",
                }}
                src={user.photoURL || "https://picsum.photos/200/300"}
                alt=""
              />
            )}
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
    </div>
  );
};

export default Navbar;
