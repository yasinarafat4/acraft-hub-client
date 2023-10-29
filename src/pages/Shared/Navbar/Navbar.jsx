import { useContext, useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();

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
      {user && (
        <li title="Dashboard">
          {/* TODO: Have to make dynamic */}
          <Link to="/dashboard/dashHome">Dashboard</Link>
        </li>
      )}
      <li title="Instructors" className={isNavLinkActive("/instructors")}>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li title="Our Classes" className={isNavLinkActive("/classes")}>
        <Link to="/classes">Classes</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-full md:max-w-screen-xl bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-7 md:w-7"
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
            className="menu menu-compact dropdown-content space-y-4 p-2 shadow bg-opacity-70 bg-black text-base text-white rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex flex-col ml-2">
            <p
              className="text-lg md:text-xl tracking-[2px] md:tracking-[3px]"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              ACraftHub
            </p>
            <h2
              className="text-xl md:text-2xl font-bold tracking-[3px]"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              SCHOOL
            </h2>
          </div>
        </Link>
      </div>
      <div className="navbar-end flex gap-1 font-[400] text-sm xl:text-lg items-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal xl:px-1 font-semibold lg:gap-1 xl:gap-2 lg:text-[13px] xl:text-[15px]">
            {navItems}
          </ul>
        </div>
        <div className="cursor-pointer xl:mr-2">
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
              onClick={handleLogOut}
              class="py-1 px-2 xl:px-3 text-white bg-red-500 rounded-md transition duration-300 hover:bg-red-600"
            >
              Logout
            </button>

            {user && (
              <img
                className="rounded-full"
                title={user.displayName || "User"}
                style={{
                  width: "40px",
                  height: "40px",
                  margin: "5px",
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
              <button className=" bg-[#133795] hover:bg-violet-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded focus:outline-none focus:shadow-outline duration-500">
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
