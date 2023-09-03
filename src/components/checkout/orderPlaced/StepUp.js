import React from "react";
import { Typography } from "antd";
import "./order.css";
import { useNavigate } from "react-router";
import { Descope } from "@descope-int/react-dynamic-sdk";
function StepUp() {
  const navigate = useNavigate();
  const onSuccessSecurity = () => {
    console.log("Step up: Logged in!");
    localStorage.setItem("selectedItem", JSON.stringify([]));
    let productDataFromLocalStorage = JSON.parse(
      localStorage.getItem("productData")
    )
      ? JSON.parse(localStorage.getItem("productData"))
      : [];
    let newArrivalDataFromLocalStorage = JSON.parse(
      localStorage.getItem("newArrivalData")
    )
      ? JSON.parse(localStorage.getItem("newArrivalData"))
      : [];
    productDataFromLocalStorage.map((item) => {
      item.addedToCart = false;
    });
    localStorage.setItem(
      "productData",
      JSON.stringify(productDataFromLocalStorage)
    );
    newArrivalDataFromLocalStorage.map((item) => {
      item.addedToCart = false;
    });
    localStorage.setItem(
      "newArrivalData",
      JSON.stringify(newArrivalDataFromLocalStorage)
    );
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
          flowId="step-up"
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
