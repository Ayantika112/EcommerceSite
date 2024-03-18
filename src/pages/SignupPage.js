import "../style/LoginPage.css";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import validator from 'validator';

function SignupPage() {
  var [troggleCount, setTroggleCount] = useState(0);
  var [troggleCount1, setTroggleCount1] = useState(0);
  const [emailError, setEmailError] = useState() 
  const validateEmail = (e) => {
    var email = e.target.value 
  
    if (validator.isEmail(email)) { 
      setEmailError(true) 
    } else { 
      setEmailError(false) 
    } 
  } 
  return (
    <div className="loginPage d-flex justify-content-center w-100 card">
      <div className="card-body">
        <form>
          {/* <!-- Heading --> */}
          <p className="" style={{ textAlign: "center", fontWeight: "bold" }}>
            Sign In
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
            }}>{emailError ? 'Valid Email' : 'Enter valid Email!'}</span>
          </div>

          {/* <!-- Created Password input --> */}
          <div className="form-outline mb-3 eyeInputField">
            <input
              type={troggleCount1 % 2 === 1 ? "text" : "password"}
              id="form2Example2"
              placeholder="Created Password"
              className="form-control"
            />
            <span
              className="icon-style"
              onClick={() => {
                if (troggleCount1) {
                  setTroggleCount1(0);
                } else {
                  setTroggleCount1(1);
                }
                console.log(troggleCount1)
              }}
            >
              {troggleCount1 % 2 === 0 ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-2 eyeInputField">
            <input
              type={troggleCount % 2 === 1 ? "text" : "password"}
              id="form2Example2"
              placeholder="Confirm Password"
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
                console.log(troggleCount)
              }}
            >
              {troggleCount % 2 === 0 ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </div>



          {/* <!-- Submit button --> */}
          <Link to="/login">
            <button type="button" className="btn btn-primary w-100 mb-4">
              Sign In
            </button></Link>
        </form>
        <Outlet />
      </div>
    </div>
  );
}

export default SignupPage;
