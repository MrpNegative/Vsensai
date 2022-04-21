import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../Authantication/firebase.init";
import "./Login.css";

const Login = () => {
  // Functions
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    others: "",
  });

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const handelEmailInput = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);

    if(validEmail){
      setUserInfo({...userInfo, email: event.target.value}) 
      setErrors({...errors, email: ""})      
  } else {
      setErrors({...errors, email: "Invalid email"})
      setUserInfo({...userInfo, email: ""})
  }
  };

  const handelPassInput = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordRegex.test(event.target.value);

    if(validPassword){
      setUserInfo({...userInfo, password: event.target.value});
      setErrors({...errors, password: ""});
  } else {
      setErrors({...errors, password: "Min: 1 Letr, 1 Num, Min 8 char"});
      setUserInfo({...userInfo, password: ""})
  }
   
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
  };

  // hookError 
  useEffect(() => {
    if(hookError){
      setErrors({...errors, others:hookError?.message})
    }
  },[hookError])
 
  return (
    <div className="login-container">
      <div className="login-sm-container">
        <h2>Sign In</h2>
        <form onSubmit={handelSubmit}>
          {/* Email input*/}
          <div className="form-outline mb-4">
            <input
              onChange={handelEmailInput}
              type="text"
              id="form2Example1"
              className="form-control"
            />
            <div className="d-flex justify-content-between">
              <label className="form-label">Email address</label>{" "}
              {errors && <span>{errors.email}</span>}
            </div>
          </div>

          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              onChange={handelPassInput}
              type="password"
              className="form-control"
            />
            <div className="d-flex justify-content-between">
              <label className="form-label">Password</label>{" "}
              {errors && <span>{errors.password}</span>}
            </div>
            {errors && <span>{errors.others}</span>}
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col">
              {/*  Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
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
