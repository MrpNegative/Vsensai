import React from "react";
import "./Checkout.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const callTost=()=>{
        toast("Order Successful")
    }
  return (
    <div>
        <ToastContainer />
      <h1 className="text-center fw-bold my-3">Check Out</h1>
      <hr/>
      <div className="container p-0">
        <div className="ck-card px-4">
          <p className="h8 py-3">Delivery Email</p>

          <div className="d-flex flex-column">
            <input
              className="form-control mb-3"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <p className="h8 py-3">Payment Details</p>
          <div className="row gx-3">
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Person Name</p> 
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Card Number</p> 
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="1234 5678 435678"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">Expiry</p> 
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <p className="text mb-1">CVV/CVC</p> 
                <input
                  className="form-control mb-3 pt-2 "
                  type="password"
                  placeholder="***"
                />
              </div>
            </div>
            <div className="col-12">
              <div onClick={callTost} className="btn btn-primary mb-3">
                 
                <span className="ps-3">Complete Payment</span> 
                <span className="fas fa-arrow-right"></span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
