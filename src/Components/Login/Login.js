import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Authantication/firebase.init";
import "./Login.css";
import Loading from "../Loading/Loading";

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
    resetPass: "",
  });

  const [signInWithEmail, emilPassUser, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const [user] = useAuthState(auth);

if(sending || loading2 || loading){
  <Loading></Loading>
}

  const handelEmailInput = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
      
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handelPassInput = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordRegex.test(event.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Min: 1 Letr, 1 Num, 8 char" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    signInWithEmail(userInfo.email, userInfo.password);
    setErrors({ ...errors, others: "" });
  };

  const handelGoogleSubmit = ()=>{
    signInWithGoogle()
    setErrors({ ...errors, others: "" });
  }
  const emptyError = () =>{
    setErrors({...errors, resetPass: ""})
  }
  const resetPassword = async() => {
    const email = userInfo.email;
    if(email){
      await sendPasswordResetEmail(userInfo.email);
      // toast("Password Reset Link send!")
      return
    }
    if(resetError){
      setErrors({...errors, resetPass: resetError?.message})
    }
    if (sending){
      toast("Password Reset Link send!")
      setErrors({...errors, resetPass: ""})
    }
      else{
        toast("Enter Email!")
      }
    }
    
  // };
  // hookError
  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      setErrors({ ...errors, others: hookError?.message });
    }
  }, [hookError, googleError]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

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
              <a
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                href="#!"
                onClick={emptyError}
              >
                Forgot password?
              </a>
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
            <div onClick={handelGoogleSubmit} className="google-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20190925201609%21Google_%22G%22_Logo.svg"
                alt=""
              />{" "}
              <p>Continue With Google</p>
            </div>
          </div>
        </form>
      </div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Reset Confirmation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3>Send Password Reset Link</h3>
              {errors && <span>{errors.resetPass}</span>}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <ToastContainer />
              <button
                type="button"
                className="btn btn-primary"
                onClick={resetPassword}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
