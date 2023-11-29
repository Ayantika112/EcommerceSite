import { useState } from "react";
import "../style/LoginPage.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

function LoginPage() {
  var [troggleCount, setTroggleCount] = useState(0);
  return (
    <div className="loginPage d-flex justify-content-center w-100 card">
      <div className="card-body">
        <form>
          {/* <!-- Heading --> */}
          <p className="" style={{ textAlign: "center", fontWeight: "bold" }}>
            Log In
          </p>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-3">
            <input
              type="email"
              id="form2Example1"
              placeholder="Email address"
              className="form-control"
            />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-2 eyeInputField">
            <input
              type="password"
              id="form2Example2"
              placeholder="Password"
              className="form-control"
            />
            <span
              className="icon-style"
              onClick={() => {
                if (troggleCount) {
                  setTroggleCount(0);
                } else {
                  setTroggleCount(1);
                }
                console.log(troggleCount);
              }}
            >
              {troggleCount % 2 === 0 ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* <!-- Forgot Password --> */}
          <div className="mb-2 text-center">
            <a href="#!">Forgot password?</a>
          </div>

          {/* <!-- Submit button --> */}
          <Link to="/Signup/product">
            <button type="button" className="btn btn-primary w-100 mb-4">
              Log In
            </button>
          </Link>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/Signup">Sign Up</Link>
            </p>
          </div>
        </form>
        <Outlet />
      </div>
    </div>
  );
}

export default LoginPage;
