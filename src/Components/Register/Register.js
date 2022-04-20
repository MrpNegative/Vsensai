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
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
             Confirm Password
            </label>
          </div>



          {/* <!-- Submit button --> */}
          <button type="button" class="btn btn-primary btn-block mb-4">
            Register
          </button>

          {/* <!-- Register buttons --> */}
          <div class="text-center">
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