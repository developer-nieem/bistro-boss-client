import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ThirdpartyLogin = () => {
  const { loginWIthGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleLoginHandler = () => {
    loginWIthGoogle()
      .then((result) => {
        const user = result.user;
        const saveUser = { name: user.displayName, email: user.email };
        console.log(user);
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {})
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-center">
      <button
        onClick={googleLoginHandler}
        className="btn gap-2 btn-outline my-3"
      >
        <FaGoogle></FaGoogle>
        Login with Google
      </button>
    </div>
  );
};

export default ThirdpartyLogin;
