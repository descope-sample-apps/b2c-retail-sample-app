import { Typography } from "antd";
import React from "react";
import { SignUpOrInFlow } from '@descope-int/react-dynamic-sdk'
import { useNavigate } from "react-router-dom";
import "./signup.css";
function Signup() {
  const navigate = useNavigate()
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
        <SignUpOrInFlow
            onSuccess={(e) => {
              console.log('Logged in!');
              navigate("/");
            }}
            onError={(e) => console.log('Could not logged in!')}
            // use debug flag to show flow errors and additional debug information
            // debug="true"
        />
        </div>
      </div>
    </>
  );
}

export default Signup;
