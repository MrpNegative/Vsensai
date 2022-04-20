import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css'

const Register = () => {
    return (
        <div>
    <div className="login-container">
      <div className="login-sm-container">
        <h2>Register</h2>
        <form>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" className="form-control" />
            <label className="form-label" >
              Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password" id="form2Example2" className="form-control" />
            <label className="form-label">
              Password
            </label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" className="form-control" />
            <label className="form-label">
             Confirm Password
            </label>
          </div>



          {/* <!-- Submit button --> */}
          <button type="button" className="btn btn-primary btn-block mb-4">
            Register
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Already Registered? <Link to="/login">Login</Link>
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

        </div>
    );
};

export default Register;