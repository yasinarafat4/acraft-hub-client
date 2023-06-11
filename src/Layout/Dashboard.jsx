import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import dashLogo from "../assets/logo/Acraft_hub.png";
import { BiSelectMultiple } from "react-icons/bi";
import { FaUserCheck, FaHome, FaUsers } from "react-icons/fa";
import { GiWallet, GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  // TODO
  const isAdmin = true;

  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path ? "activeDash" : "defaultDash";
  };

  return (
    <div>
      <Helmet>
        <title>ACraft | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-slate-300 min-h-[calc(100vh-50px)]">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-xs drawer-button lg:hidden my-4"
          >
            Open
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-4 w-80 h-full bg-slate-600 text-white space-y-3">
            {/* Dynamic Dashboard Menu starts here */}
            {isAdmin ? (
              <>
                {/* Admin's dashboard starts */}
                <Link to="/">
                  <div className="flex flex-col mb-6 text-center">
                    <img
                      className="h-22 w-28 lg:h-28 lg:w-32 xl:h-28 xl:w-36 mx-auto"
                      src={dashLogo}
                      alt=""
                    />
                    <p className="text-xl md:text-2xl tracking-[4px] font-bold mt-2">
                      Admin Dashboard
                    </p>
                  </div>
                </Link>
                <NavLink
                  to="/dashboard/manageClasses"
                  className={isNavLinkActive("/dashboard/manageClasses")}
                >
                  <FiSettings className="text-xl md:text-2xl text-white" />
                  <li className="text-sm md:text-lg"> Manage Classes</li>
                </NavLink>
                <NavLink
                  to="/dashboard/manageUsers"
                  className={isNavLinkActive("/dashboard/manageUsers")}
                >
                  <FaUsers className="text-xl md:text-2xl text-white" />
                  <li className="text-sm md:text-lg">Manage Users</li>
                </NavLink>
                {/* Admin's dashboard ends */}
              </>
            ) : (
              <>
                {/* Users's dashboard starts */}
                <Link to="/">
                  <div className="flex flex-col mb-6 text-center">
                    <img
                      className="h-22 w-28 lg:h-28 lg:w-32 xl:h-28 xl:w-36 mx-auto"
                      src={dashLogo}
                      alt=""
                    />
                    <p className="text-xl md:text-2xl tracking-[4px] font-bold mt-2">
                      Student Dashboard
                    </p>
                  </div>
                </Link>
                {/* Dynamic Dashboard Menu here */}
                <NavLink
                  to="/dashboard/mySelectedClasses"
                  className={isNavLinkActive("/dashboard/mySelectedClasses")}
                >
                  <BiSelectMultiple className="text-xl md:text-2xl text-white" />
                  <li className="text-sm md:text-lg"> My Selected Classes</li>
                </NavLink>
                <NavLink
                  to="/dashboard/myEnrolledClasses"
                  className={isNavLinkActive("/dashboard/myEnrolledClasses")}
                >
                  <FaUserCheck className="text-xl md:text-2xl text-white" />
                  <li className="text-sm md:text-lg">My Enrolled Classes</li>
                </NavLink>
                <NavLink
                  to="/dashboard/paymentHistory"
                  className={isNavLinkActive("/dashboard/paymentHistory")}
                >
                  <GiWallet className="text-xl md:text-2xl text-white" />
                  <li className="text-sm md:text-lg">Payment History</li>
                </NavLink>
                {/* User's dashboard ends */}
              </>
            )}

            <div
              style={{
                backgroundColor: "white",
                height: "1px",
                marginTop: "40px",
                marginBottom: "20px",
              }}
              className="divider"
            ></div>

            {/* Main menu start */}
            <NavLink to="/" className={isNavLinkActive("/")}>
              <FaHome className="text-xl md:text-2xl" />
              <li className="text-sm md:text-lg">Home</li>
            </NavLink>
            <NavLink
              to="/instructors"
              className={isNavLinkActive("/instructors")}
            >
              <GiTeacher className="text-xl md:text-2xl" />
              <li className="text-sm md:text-lg">Instructors</li>
            </NavLink>
            <NavLink to="/classes" className={isNavLinkActive("/classes")}>
              <SiGoogleclassroom className="text-xl md:text-2xl" />
              <li className="text-sm md:text-lg">Classes</li>
            </NavLink>
            {/* Main menu end */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
