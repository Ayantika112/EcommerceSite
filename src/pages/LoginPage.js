import { useState } from "react";
import "../style/LoginPage.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import {isLogging} from '../features/product/productSlice';
import { setLoggingValue } from "../features/product/productSlice";

function LoginPage() {
  var [troggleCount, setTroggleCount] = useState(0);
  var [emailError, setEmailError] = useState(null);
  var isLoggingTrue = useSelector(isLogging);
  var dispatch = useDispatch();
  console.log('-- isLoggingTrue --> ' + JSON.stringify(isLoggingTrue));

  var validateEmail = (e) => {
    var email = e.target.value;
    if(validator.isEmail(email)){
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  return (
    <>
      {!isLoggingTrue.isLogging ?
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
                  onChange={(e) => validateEmail(e)}
                />
                <span style={{
                  fontWeight: "bold",
                  color: emailError ? 'green' : 'red',
                }}>{emailError === null ? '' : (emailError === true ? 'Valid Email' : 'Enter valid Email!')}</span>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-2 eyeInputField">
                <input
                  type={troggleCount % 2 === 1 ? "text" : "password"}
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
              <Link to="/login/product">
                <button type="button" className="btn btn-primary w-100 mb-4" onClick={(() => {
                  // setChecking(true);
                  dispatch({'type':setLoggingValue , 'data': !isLoggingTrue.isLogging})
                })}>
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
          </div>
        </div> : null
      }
      {isLoggingTrue.isLogging ? <Outlet /> : <Link to={'/login'} />}

      {/* <div className="parentBox">
        <div className="ch">1</div>
        <div className="ch">2</div>
        <div className="ch">2</div>
        <div className="ch">2</div>
        <div className="ch">2</div>
        <div className="ch">2</div>
        <div className="ch">2</div>
        <div className="ch">3</div>
      </div> */}
    </>
  );
}

export default LoginPage;
