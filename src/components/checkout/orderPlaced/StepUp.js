import React from "react";
import { Typography } from "antd";
import "./order.css";
import { useNavigate } from "react-router";
import { Descope } from "@descope/react-sdk";
function StepUp() {
  const navigate = useNavigate();
  const onSuccessSecurity = () => {
    console.log("Step up: Logged in!");
    localStorage.setItem("selectedItem", JSON.stringify([]));
    let removeItemArray = ['productData', 'newArrivalData'];
    removeItemArray.forEach(item => localStorage.removeItem(item));    
    navigate("/payment-success");
  };
  return (
    <div className="checkout-step-up-container">
      <br />
      <br />
      <Typography className="checkout-text">Checkout</Typography>
      <br />
      <br />
      <div className="step-up-container">
        <Descope
          flowId="step-up-protected-assets"
          onSuccess={(e) => onSuccessSecurity()}
          onError={(e) => console.log("Step up: Could not logged in!")}
          // use debug flag to show flow errors and additional debug information
          // debug="true"
        />
      </div>
    </div>
  );
}

export default StepUp;
