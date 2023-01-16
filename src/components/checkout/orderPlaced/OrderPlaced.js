import React from "react";
import { Typography, Button } from "antd";
import "./order.css";
import { useNavigate } from "react-router";
function OrderPlaced() {
  const navigate = useNavigate();

  return (
    <div className="checkout-order-container">
      <Typography className="checkout-text">Checkout</Typography>
      <br />
      <br />
      <div className="order-container">
        <Typography className="order-heading">
        You have successfully completed step-up verification.<br></br> Thank You, your order has been placed!
        </Typography>
        <Typography className="order-sub-heading">
          Please check your email for your confimation.
        </Typography>
        <br />
        <div className="btn-just-cont">
          <Button className="btn-just" onClick={() => navigate("/")}>
            Just take me home
          </Button>
          <a
            href="https://docs.descope.com"
            target="_blank"
            className="btn-feel"
          >
            <Button className="btn-feed">Feeling Lucky?</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
