import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../Authantication/firebase.init";
import "./Login.css";

const Login = () => {
  // Functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);


  const handelEmailInput = (event) => {
    setEmail(event.target.value);
  };


  const handelPassInput = (event) => {
    setPassword(event.target.value);
  };
  
  const handelSubmit= (event)=>{
    event.preventDefault()
    signInWithEmail(email, password)
  }
console.log( email, password);
  return (
    <div className="login-container">
      <div className="login-sm-container">
        <h2>Log In</h2>
        <form onSubmit={handelSubmit}>
          {/* Email input*/}
          <div className="form-outline mb-4">
            <input
              onChange={handelEmailInput}
              type="email"
              id="form2Example1"
              className="form-control"
            />
            <label className="form-label" >
              Email address
            </label>
          </div>

          {/* Password input */}
          <div className="form-outline mb-4">
            <input onChange={handelPassInput}
              type="password"
              className="form-control"
            />
            <label className="form-label" >
              Password
            </label>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col">
              {/*  Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* Submit button */}
          <button type="submit"  className="btn btn-primary btn-block mb-4">
            Log In
          </button>

          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member?{" "}
              <Link to="/register">
                <span>Register</span>
              </Link>
            </p>
            <p>or Continue with:</p>
            <div className="google-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20190925201609%21Google_%22G%22_Logo.svg"
                alt=""
              />{" "}
              <p>Continue With Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
