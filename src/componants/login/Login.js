import { Button, Divider, Typography } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
  const initialValues = {
    email: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormValues({ ...formValues, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    validate(formValues);
    setIsSubmit(true);
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      alert("Enter an email.");
    } else if (!regex.test(values.email)) {
      alert("This is not a valid email format!");
    }
  };
  return (
    <>
      <div className="main-container-login">
        <div className="first-div">
          <Typography className="first-text">
            You Look Funny (in a Good Way)
          </Typography>
          <br />
          <Typography className="sec-text">
            Putting on a Tee-Hee tee will make you want to finally turn on your
            camera in Zoom meetings. Make sure to invert your camera so others
            can read the tee too!
          </Typography>
        </div>
        <div className="login-container">
          <br />
          <Typography className="login-text">Login</Typography>
          <form className="form-login">
            <input
              className="input-email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              placeholder="Enter email address"
            />

            <Button className="email-btn" onClick={submitData}>
              Continue with email
            </Button>
            <Divider>or</Divider>
            <Button className="google-btn">Continue with google</Button>
            <div className="acct">
              <Typography className="acct-link">
                Dont have an account?
              </Typography>
              <Typography className="sign-up">
                <NavLink to="/sign-up" className="btn-sign">
                  SIGN UP
                </NavLink>
              </Typography>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
