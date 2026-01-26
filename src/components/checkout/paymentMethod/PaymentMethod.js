import { Button, Radio, Typography } from "antd";
import React, { useState } from "react";
import paypal from "../../../assets/paypal.svg";
import paypal_sec from "../../../assets/Fill.svg";
import vector from "../../../assets/Vector.svg";
import "./paymentMethod.css";
import { useNavigate } from "react-router-dom";

const PaymentMethod = () => {
  const initialValues = {
    cardNo: "",
    date: "",
    cCode: "",
  };

  const [value, setValue] = useState(1);

  const [formPayment, setFormPayment] = useState(initialValues);
  const [fromError, setFormError] = useState({});

  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPayment({ ...formPayment, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    let isValid = validate();
    if (isValid) {
      navigate("/billing-summary");
      setFormPayment("");
    } else {
      validate();
    }
  };

  const validate = () => {
    let error = {};

    if (formPayment.cardNo === "") {
      error.cardNo = "Enter an email.";
    } else if (isNaN(formPayment.cardNo)) {
      error.cardNo = "Enter Numbers only";
    }
    if (formPayment.date === "") error.date = "Enter Expiration Date.";
    if (formPayment.cCode === "") error.cCode = "Enter card code.";
    setFormError({ ...error });
    return Object.keys(error).length < 1;
  };

  return (
    <div className="main-wrap">
      <div className="checkout-payment-container">
        <Typography className="checkout-text">Checkout</Typography>
        <br />
        <br />
        <div className="payment-wrap">
          <Typography className="title-billing">Payment Method</Typography>

          <div>
            <Radio.Group
              onChange={onChange}
              value={value}
              className="radio-paypal"
            >
              <Radio value={1} className="desktop">
                <div className="radio-content">
                  <Typography className="paypal-text">PayPal</Typography>
                  <Typography className="paypal-content">
                    You will be redirected to the PayPal website after
                    submitting your order
                  </Typography>
                  <div className="paypal-img-container">
                    <img className="img-paypal" src={paypal} alt="paypal" />
                    <img
                      className="img-paypal-sec"
                      src={paypal_sec}
                      alt="paypal"
                    />
                  </div>
                </div>
              </Radio>
              <Radio value={1} className="mobile">
                <div className="radio-content">
                  <div className="mobile-paypal-container">
                    <Typography className="paypal-text">PayPal</Typography>
                    <div className="paypal-img-container">
                      <img className="img-paypal" src={paypal} alt="paypal" />
                      <img
                        className="img-paypal-sec"
                        src={paypal_sec}
                        alt="paypal"
                      />
                    </div>
                  </div>
                  <Typography className="paypal-content">
                    You will be redirected to the PayPal website after
                    submitting your order
                  </Typography>
                </div>
              </Radio>
              <Radio value={2} className="radio-pay">
                <div className="sec-radio">
                  <Typography className="pay-text">
                    Pay with Credit Card
                  </Typography>

                  <img src="" alt="img" />
                </div>
                <br />
                <form onSubmit={submitData}>
                  <div className="form-wrap payment-form-wrap">
                    <div className="pay-form">
                      <input
                        type="text"
                        id="cardNo"
                        name="cardNo"
                        value={formPayment.cardNo}
                        onChange={handleChange}
                        className="form-input width-input "
                        autoComplete="off"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="cardNo" className="form-label">
                        Card number
                      </label>
                    </div>

                    <div className="pay-form">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formPayment.date}
                        onChange={handleChange}
                        className="form-input e-input"
                        autoComplete="off"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="date" className="form-label">
                        Expiration Date
                      </label>
                    </div>
                  </div>
                  <div className="error-text">
                    <span className="card-text">{fromError.cardNo}</span>
                    <span className="expire-text">{fromError.date}</span>
                  </div>
                  <div className="form-wrap payment-form-wrap">
                    <div className="pay-form">
                      <input
                        type="text"
                        id="cCode"
                        name="cCode"
                        value={formPayment.cCode}
                        onChange={handleChange}
                        className="form-input width-input"
                        autoComplete="off"
                        placeholder=" "
                        required
                      />
                      <label htmlFor="cCode" className="form-label ">
                        Card Security Code
                      </label>
                    </div>
                    <div className="about">
                      <Typography className="whatis">What is this?</Typography>
                    </div>
                  </div>
                  <span className="error-code">{fromError.cCode}</span>
                </form>
              </Radio>
            </Radio.Group>
            <div className="last-sec">
              <div className="sec-third">
                <img className="img-vector" src={vector} alt="vector" />
              </div>
              <br />
              <Typography className="content-pay">
                We protect your payment information using encryption to provide
                bank-level security.
              </Typography>
            </div>
            <br />
            <div className="footer-btn">
              <Button
                className="back back-btn"
                onClick={() => navigate("/shipping")}
              >
                Back
              </Button>
              <Button className="back continue" onClick={submitData}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
