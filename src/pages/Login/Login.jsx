import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import loginImage from "../../assets/images/login/login.png";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Show password function
  const togglePasswordVisibility = () => {
    setShowPassword((prevVisible) => !prevVisible);
  };

  return (
    <>
      <Helmet>
        <title>ACraft | Login</title>
      </Helmet>

      <div
        className="hero-content overflow-auto"
        style={{
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="flex flex-col lg:flex-row card justify-center items-center">
          <div>
            <img className=" lg:w-full" src={loginImage} alt="" />
          </div>
          <form className="card-body">
            <h2 className="text-3xl text-center font-bold">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <div
                className="absolute top-[70px] right-2 transform -translate-y-1/2 h-8 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-500" />
                ) : (
                  <FiEye className="text-gray-500" />
                )}
              </div>
            </div>

            {/* <p className="text-red-600 text-sm m-1 font-semibold">{error}</p> */}
            <div className="form-control mt-6">
              <input
                // disabled={disabled}
                type="submit"
                value="Login"
                className="btn text-lg bg-[#133795] hover:bg-violet-700 text-white  font-semibold border-none"
              />
            </div>
            <div className="text-center">
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">Or Sign In with</div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-3 mb-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline gap-2 flex justify-center items-center">
                  <FcGoogle
                    className="rounded-full text-lg"
                    style={{ backgroundColor: "white" }}
                  />{" "}
                  Login with Google{" "}
                </button>
              </div>
              <h2 className="font-semibold">
                Have not any account?{" "}
                <Link to="/signUp">
                  <span className="text-[#FF3811]">Sign Up</span>
                </Link>{" "}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
