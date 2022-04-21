import React from "react";
import { Link } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Authantication/firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bolder" to="/">
            <span>V-SENSAI</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/checkout"
                >
                  Check Out
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item fw-bold">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About Me
                </Link>
              </li>
            </ul>
            <div>
              {user ? (
                <button
                  onClick={() => signOut(auth)}
                  className="btn-light btn btn-sm fw-bold"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn-light btn btn-sm fw-bold">
                    SIGN IN
                  </button>
                </Link>
              )}
              {/* <Link to="/register"><button className="btn-light btn btn-sm fw-bold">SIGN IN / UP</button></Link> */}
            </div>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
