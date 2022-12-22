import { Typography, Form, Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";
function Signup() {
  return (
    <>
      <div className="main-container">
        <div className="left-side-container">
          <Typography className="main-heading">
            You Look Funny (in a Good Way)
          </Typography>
          <p className="sub-para">
            Putting on a Tee-Hee tee will make you want to finally turn on your
            camera in Zoom meetings. Make sure to invert your camera so others
            can read the tee too!
          </p>
        </div>
        <div className="signup-container">
          <Form className="Signup-form">
            <Typography className="signup-heading">Sign Up</Typography>

            <div className="form">
              <input
                type="text"
                id="fname"
                name="fname"
                className="signup__input"
                autoComplete="off"
                placeholder="First Name"
              />
            </div>

            <div className="form">
              <input
                type="text"
                id="fname"
                name="fname"
                className="signup__input"
                autoComplete="off"
                placeholder="Last Name "
              />
            </div>

            <div className="footer-btn">
              <Button className="acc-btn">Create your account</Button>
            </div>
            <Typography className="footer-para">
              By creating your account,you agree to the Terms of Service and
              consent to our Privacy Policy.
            </Typography>
            <div className="login-row">
              <Typography className="footer-line">
                Already have an account?
              </Typography>
              <NavLink className="login-link" to="/login">
                LOGIN
              </NavLink>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Signup;
