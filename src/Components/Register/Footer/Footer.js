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
            <Link to="/">Become an Affiliate</Link>
            <Link to="/">Gift Card</Link>
            <Link to="/">FAQ</Link>
          </ul>
          <ul className="d-flex flex-column">
            <p>SUPPORT</p>
            <Link to="/">Contact</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy Policy</Link>
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
