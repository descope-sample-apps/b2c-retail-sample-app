import { Typography } from "antd";
import React from "react";
import "./login.css";
import { Descope } from '@descope/react-sdk'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
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
        <Descope
            flowId= {
              process.env.REACT_APP_DESCOPE_SIGN_IN_FLOW_ID || "sign-up-or-in"
            }
            onSuccess={(e) => {
              localStorage.setItem("loginDetails", JSON.stringify(e.detail.user))
              window.analytics.identify(e.detail.user.userId, {
                name: e.detail.user.name, //user trait
                email: e.detail.user.email, //user trait
              });
              switch (localStorage.getItem('pathState')) {
                case 'CART':
                  navigate('/cart');
                  localStorage.removeItem('pathState');
                  break;              
                default:
                  navigate('/');
                  break;
              }
            }}
            onError={(e) => console.log('Could not logged in!')}
            // use debug flag to show flow errors and additional debug information
            // debug="true"
        />
        </div>
      </div>
    </>
  );
};

export default Login;
