import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../Authantication/firebase.init";
import '../Login/Login.css'

  

const Register = () => {
// Functions
const [userInfo, setUserInfo] = useState({
  email: "",
  password: "",
  confirmPassword:""
});
const [errors, setErrors] = useState({
  email: "",
  password: "",
  others: ""
});

const [createUserWithEmailAndPassword, emailPassUser, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
        const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

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
const handleConfirmPassInput = (event) => {
  if (event.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: event.target.value });
      setErrors({ ...errors, password: "" });
  } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
  }
};

const handelSubmit = (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  setErrors({...errors, others:""})
};

// hookError 
useEffect(() => {
  const error = hookError || googleError;
  if(error){
    setErrors({...errors, others:error?.message})
  }
},[hookError, googleError])

const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";
useEffect(() => {
  if (user) {
      navigate(from);
  }
}, [user]);

    return (
        <div>
    <div className="login-container">
      <div className="login-sm-container">
        <h2>Register</h2>
        <form onSubmit={handelSubmit}>
          {/* <!-- Email input --> */}
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
          </div>
          <div className="form-outline mb-4">
            <input onChange={handleConfirmPassInput} type="password" className="form-control" />
            <label  className="form-label">
             Confirm Password
            </label>{errors && <span>{errors.password}</span>}
          </div>


          {errors && <span>{errors.others}</span>}
          {/* <!-- Submit button --> */}
          <div>
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Register
          </button>
          </div>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Already Registered? <Link to="/login">Login</Link>
            </p>
            <p>or Continue with:</p>
            <div onClick={() => signInWithGoogle()} className="google-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20190925201609%21Google_%22G%22_Logo.svg"
                alt=""
              />
              <p>Continue With Google</p>
            </div>
          </div>
        </form>
      </div>
    </div>

        </div>
    );
};

export default Register;