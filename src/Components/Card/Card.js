import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ item }) => {
  const { name, price, img, Time, description } = item;
  return (
    <div className="bg-dark card-container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="card-info-container">
      <div className="card-info">
        <h3>{name}</h3>
        <h5>Duration: {Time} Hour</h5>
        <p className="card-disc">{description}</p>
      </div>
      <div>
        <h2>
          <span>Price: {price}$</span>
        </h2>
        <Link to="/checkout"><button className="ck-btn">Check Out</button></Link>
      </div>
      </div>
    </div>
  );
};

export default Card;
