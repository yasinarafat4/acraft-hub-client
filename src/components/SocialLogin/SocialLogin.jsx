import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useLocation } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);

        const saveUser = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex justify-center items-center gap-4 mt-3 mb-3">
      <button
        onClick={handleGoogleSignIn}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline gap-2 flex justify-center items-center"
      >
        <FcGoogle
          className="rounded-full text-lg"
          style={{ backgroundColor: "white" }}
        />{" "}
        Login with Google{" "}
      </button>
    </div>
  );
};

export default SocialLogin;
