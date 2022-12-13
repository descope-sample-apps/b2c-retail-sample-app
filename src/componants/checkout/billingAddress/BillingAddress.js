import { Button, Checkbox, Select, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./billingAddress.css";

const BillingAddress = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
  };
  const [billFormValues, setBillFormValues] = useState(initialValues);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const options = [{ value: "India", label: "India" }];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setBillFormValues({ ...billFormValues, [name]: value });
  };

  const submitFormData = (e) => {
    e.preventDefault();
    let isValid = validate();

    if (isValid) {
      navigate("/shipping");
      // setBillFormValues("");
    } else {
      validate();
    }
  };

  const validate = () => {
    let error = {};
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (billFormValues.fname === "") {
      error.fname = "Enter an name.";
    }
    if (billFormValues.lname === "") {
      error.lname = "Enter the last name.";
    }
    if (billFormValues.email === "") {
      error.email = "Enter an email.";
    }
    if (billFormValues.email === "") {
      error.email = "Email is required!";
    } else if (!regEx.test(billFormValues.email)) {
      error.email = "This is not a valid email format!";
    }
    setError({ ...error });
    return Object.keys(error).length < 1;
  };

  return (
    <div className="main-wrap">
      <div className="checkout-container">
        <br />
        <Typography className="checkout-text">Checkout</Typography>
        <br />
        <div className="billing-address-form">
          <form className="form-billing">
            <Typography className="title-billing">Billing Address</Typography>
            <div className="form-wrap form-bill">
              <div className="form">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={billFormValues.fname}
                  onChange={handleChange}
                  className="form__input"
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="fname" className="form__label">
                  First Name
                </label>
              </div>
              <div className="form">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={billFormValues.lname}
                  onChange={handleChange}
                  className="form__input"
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="lname" className="form__label">
                  Last Name
                </label>
              </div>
            </div>
            <div className="error-div">
              <span className="error-fname">{error.fname}</span>
              <span className="error-lname">{error.lname}</span>
            </div>
            <div className="form ">
              <input
                type="text"
                id="email"
                name="email"
                value={billFormValues.email}
                onChange={handleChange}
                className="form__input"
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="email" className="form__label">
                Email Address
              </label>
            </div>
            <div className="error-div">
              <span className="error-email">{error.email}</span>
            </div>
            <div className="form ">
              <input
                type="text"
                id="street"
                name="street"
                className="form__input"
                autoComplete="off"
                placeholder=" "
              />
              <label htmlFor="street" name="street" className="form__label">
                Street Address
              </label>
            </div>
            <div className="form ">
              <input id="street" className="form__input" placeholder=" " />
            </div>
            <div className="form-wrap form-bill">
              <div className="form ">
                <label htmlFor="state" name="state" className="form__label">
                  State/Province
                </label>
                <Select
                  className="select"
                  // onChange={handleChange}
                  options={options}
                  placeholder="select"
                />
              </div>
              <div className="form ">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form__input"
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="city" className="form__label">
                  City
                </label>
              </div>
            </div>
            <div className="form-wrap form-bill">
              <div className="form ">
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="form__input"
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="zip" className="form__label">
                  Zip/Postal Code
                </label>
              </div>
              <div className="form ">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form__input"
                  autoComplete="off"
                  placeholder=" "
                />
                <label htmlFor="phone" className="form__label">
                  Phone
                </label>
              </div>
            </div>
            <div className="form">
              <Checkbox onChange={(e) => e.target.checked} className="check">
                My billing and shipping address are the same
              </Checkbox>
            </div>
            <div className="footer-btn">
              <Button
                className="back back-btn"
                onClick={() => navigate("/cart")}
              >
                Back
              </Button>
              <Button className="back continue" onClick={submitFormData}>
                Continue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
