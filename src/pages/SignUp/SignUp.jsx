import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import signUpImage from "../../assets/images/sign-up/sign-up.png";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  // React hook form
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  // Show password function
  const togglePasswordVisibility = () => {
    setShowPassword((prevVisible) => !prevVisible);
  };

  return (
    <>
      <Helmet>
        <title>ACraft | Sign Up</title>
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
          <div className="lg:w-1/2">
            <img
              className="w-9/12 lg:w-full mx-auto"
              src={signUpImage}
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body w-full lg:w-1/2"
          >
            <h2 className="text-3xl text-center font-bold">Sign Up</h2>

            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-700 font-semibold">
                  Please enter your name.
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <>
                  {errors.email.type === "required" && (
                    <span className="text-red-700 font-semibold">
                      Email is required!
                    </span>
                  )}
                  {errors.email.type === "pattern" && (
                    <span className="text-red-700 font-semibold">
                      You must provide a valid email!
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Photo Url Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Photo URL
                </span>
              </label>
              <input
                {...register("photoURL", {
                  required: true,
                  pattern: /^(ftp|http|https):\/\/[^ "]+$/,
                })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && errors.photoURL?.type === "required" && (
                <span className="text-red-700 font-semibold">
                  Please provide a URL.
                </span>
              )}
              {errors.photoURL?.type === "pattern" && (
                <span className="text-red-700 font-semibold">
                  Your must provide a valid URL!
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*])(?=.*[0-9])/,
                })}
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
              {errors.password && (
                <>
                  {errors.password?.type === "required" && (
                    <span className="text-red-700 font-semibold">
                      Password is required!
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-700 font-semibold">
                      Your password must be at least 6 characters long!
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-700 font-semibold">
                      Your password must not exceed 20 characters!
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-700 font-semibold">
                      Your password must have one uppercase, one lowercase, one
                      number and one special character!
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password, // Custom validation function
                })}
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
              {errors.confirmPassword && (
                <span className="text-red-700 font-semibold">
                  Your password does not match the previous password.
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                // disabled={disabled}
                type="submit"
                value="Sign Up"
                className="btn text-lg bg-[#133795] hover:bg-violet-800 text-white  font-semibold border-none"
              />
            </div>
            <div className="text-center">
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">Or Sign Up with</div>
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
                Have an account?{" "}
                <Link to="/login">
                  <span className="text-[#FF3811]">Login</span>
                </Link>{" "}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
