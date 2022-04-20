import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container d-flex flex-wrap justify-content-center align-center">
          <ul className="d-flex flex-column">
            <p>SERVICES</p>
            <Link className="text-light" to="/">Become an Affiliate</Link>
            <Link className="text-light" to="/">Gift Card</Link>
            <Link className="text-light" to="/">FAQ</Link>
          </ul>
          <ul className="d-flex flex-column">
            <p>SUPPORT</p>
            <Link  className="text-light" to="/">Contact</Link>
            <Link className="text-light" to="/">Terms of Service</Link>
            <Link className="text-light" to="/">Privacy Policy</Link>
          </ul>
          <div className="f-cont-3">
            <p>&copy; 2022 <span>V-SENSAI</span>. All Rights Reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
