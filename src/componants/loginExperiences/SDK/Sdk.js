import { Button, Typography } from "antd";
import React from "react";
import "./sdk.css";

const Sdk = () => {
  return (
    <div className="main-flow-container">
      <div className="left-flow">
        <Typography className="flow-content">
          Descope SDKs allow you to easily integrate any passwordless
          authentication method into your app.
        </Typography>
        <br />
        <Typography className="flow-content">
          You can use Client SDKs to let Descope handle session management, or
          Backend SDKs to directly connect your app server to our service.
        </Typography>
        <br />

        <div className="btn-desktop-view">
          <Button className="btn-client-sdk">
            <span>Client SDKs</span>
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button className="btn-client-sdk">
            <span>Backend SDKs</span>
          </Button>
        </div>
      </div>
      <div className="right-flow">
        <div className="inner-div">
          <Typography className="flow-content-right">
            Code from an SDK
          </Typography>
        </div>
      </div>

      <div className="btn-mobile-view">
        <Button className="btn-client-sdk ">
          <span>Client SDKs</span>
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button className="btn-client-sdk">
          <span>Backend SDKs</span>
        </Button>
      </div>
    </div>
  );
};

export default Sdk;
