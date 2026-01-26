import { Button, Radio, Typography } from "antd";
import shipping from "../../../assets/shipping.svg";
import React, { useState } from "react";
import "./shipping.css";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="main-wrap">
      <div className="shipping-checkout-container">
        <br />
        <Typography className="checkout-text">Checkout</Typography>
        <br />
        <br />
        <div className="shipping-container">
          <Typography className="shipping-text">Shipping</Typography>
          <br />
          <div>
            <Radio.Group
              onChange={onChange}
              value={value}
              className="radio-container"
            >
              <Radio className="radio-select desktop" value={1}>
                <div className="radio-details">
                  <Typography className="ship-price">$2.99</Typography>
                  <Typography className="track-detail">
                    USPS 1st Class With Tracking{" "}
                    <p>(5 - 13 days) COVID19 Delay</p>
                  </Typography>

                  <img src={shipping} alt="shipping" className="img-ship" />
                </div>
              </Radio>
              <Radio value={1} className="radio-select mobile">
                <div className="radio-details">
                  <div className="mobile-shipping-container">
                    <Typography className="ship-price">$2.99</Typography>
                    <div className="">
                      <img src={shipping} alt="shipping" className="img-ship" />
                    </div>
                  </div>
                  <Typography className="track-detail">
                    USPS 1st Class With Tracking{" "}
                    <p>(5 - 13 days) COVID19 Delay</p>
                  </Typography>
                </div>
              </Radio>
              <Radio className="radio-select desktop" value={2}>
                <div className="radio-details">
                  <Typography className="ship-price">$9.00</Typography>
                  <Typography className="track-detail">
                    USPS PRIORITY With Tracking
                    <p>(5 - 10 days) COVID19 Delay</p>
                  </Typography>
                  <img src={shipping} alt="shipping" className="img-ship" />
                </div>
              </Radio>
              <Radio value={2} className="radio-select mobile">
                <div className="radio-details">
                  <div className="mobile-shipping-container">
                    <Typography className="ship-price">$9.00</Typography>
                    <div className="">
                      <img src={shipping} alt="shipping" className="img-ship" />
                    </div>
                  </div>
                  <Typography className="track-detail">
                    USPS PRIORITY With Tracking
                    <p>(5 - 10 days) COVID19 Delay</p>
                  </Typography>
                </div>
              </Radio>
            </Radio.Group>
          </div>
          <br />
          <br />
          <div className="footer-btn">
            <Button
              className="back back-btn"
              onClick={() => navigate("/billing-address")}
            >
              Back
            </Button>
            <Button
              className="back continue"
              onClick={() => navigate("/payment-method")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
