import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {user , loginUser} = useContext(AuthContext);
  
  const [disabeld, setDisabeld] = useState(true);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location?.state?.from?.pathname || '/';

  console.log(from);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const loginHandlar = (event) => {
    event.preventDefault();

    const form =  event.target;
    const email =  form.email.value; 
    const pass =  form.pass.value; 
    console.log(email, pass);

    loginUser(email, pass)
    .then(result => {
        const user =  result.user;
        console.log(user);
        navigate(from, { replace: true });
    })
    .catch(error => {
        console.log(error.message);
    })
  };

  //   capeche verify
  const validCaptch = (e) => {
    console.log(e.target.value);

    if (validateCaptcha(e.target.value) == true) {
      alert("Captcha Matched");
      setDisabeld(false);
    } else {
      alert("Captcha Does Not Match");
      setDisabeld(true);
    }
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content  flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.</p>
          </div>
          <div className="card w-4/12 m-auto shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={loginHandlar}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="pass"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                  <input
                   onBlur={validCaptch}
                    type="text"
                    placeholder="captcha"
                    className="input input-bordered mt-3"
                  />
                  
                </div>
                {/* after development make button disabeled */}
                <div className="form-control mt-6">
                  <button disabled={false} className="btn btn-primary">
                    Login
                  </button>
                  <p className="text-center my-4"> New User ?   <Link className="underline" to='/register'> Register</Link> </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
