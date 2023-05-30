import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ThirdpartyLogin from "../Shared/ThirdpartyLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data.email);
    createUser(data.email, data.password)
      .then((result) => {
        const usersInfo = { name: data.name, email: data.email };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(usersInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Create successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/')
            }
          });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className=" min-h-screen  bg-base-200">
        <div className="text-center ">
          <div className="text-center pt-10">
            <h1 className="text-5xl font-bold"> Sign Up!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <div className="card w-4/12 m-auto   shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    {...register("email", { required: true })}
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /(?=.*\d)/,
                    })}
                    className="input input-bordered"
                  />
                  {/* error vailided pasword */}
                  {errors.password?.type === "required" && (
                    <p role="alert">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert">Password Must be 6 character</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p role="alert">
                      Password Must at least one digit and one lower case and
                      one upper case character
                    </p>
                  )}

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div>
                <ThirdpartyLogin></ThirdpartyLogin>
                <p>
                  {" "}
                  Already have account{" "}
                  <Link className="underline" to="/login">
                    {" "}
                    login
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
