import { Link } from "react-router-dom";
// import { FiEye, FiEyeOff } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import loginImage from "../../assets/images/login/login.png";

const Login = () => {
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Password
                </span>
              </label>
              <input
                // type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              {/* <div
                  className="absolute top-[245px] right-10 transform -translate-y-1/2 h-8 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FiEyeOff className="text-gray-500" />
                  ) : (
                    <FiEye className="text-gray-500" />
                  )}
                </div> */}
            </div>

            {/* <p className="text-red-600 text-sm m-1 font-semibold">{error}</p> */}
            <div className="form-control mt-6">
              <input
                // disabled={disabled}
                type="submit"
                value="Login"
                className="btn text-lg bg-[#D1A054B3] hover:bg-[#D1A054] hover:duration-500 text-white font-semibold border-none"
              />
            </div>
            <div className="text-center">
              <Link to="/signup">
                {" "}
                <p className="font-semibold text-lg text-[#D1A054]">
                  New here? Create a New Account
                </p>
              </Link>
            </div>
            {/* <SocialLogin text={"Or sign in with"}></SocialLogin> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
