import { Button, Typography } from "antd";
import React from "react";
import "../API/Api.css";

const Api = () => {
  return (
    <div className="main-flow-container">
      <div className="left-flow">
        <Typography className="flow-content">
        The Descope REST API enables you to add authentication to your app while retaining full control over your app and user experience.
        </Typography>
        <br />
        <br />
        <Button className="btn-api">
          <span>See API reference</span>
        </Button>
      </div>
      <div className="right-flow">
        <div className="inner-div">
          <Typography className="flow-content-right">
          Code snippet from API
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Api;
