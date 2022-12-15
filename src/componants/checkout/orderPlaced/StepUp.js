import React from "react";
import { Typography, Button, Row, Col } from "antd";
import "./order.css";
import { useNavigate } from "react-router";
import { Descope } from '@descope/react-sdk'
function StepUp() {
  const navigate = useNavigate();

  return (
    <div className="checkout-order-container">
      <Typography className="checkout-text">Checkout</Typography>
      <br />
      <br />
      <div className="order-container">
      <Descope
            flowId="step-up-protected-assets"
            onSuccess={(e) => {
              console.log('Step up: Logged in!');
              // navigate("/payment-success");
            }}
            onError={(e) => console.log('Step up: Could not logged in!')}
        />

      </div>
    </div>
  );
}

export default StepUp;
