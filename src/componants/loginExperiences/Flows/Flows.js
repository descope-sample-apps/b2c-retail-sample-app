import { Button, Typography } from "antd";
import React from "react";
import "../Flows/flows.css";

const Flows = () => {
  return (
    <div className="main-flow-container">
      <div className="left-flow">
        <Typography className="flow-content">
          With Descope Flows, you can create no-code authentication flows and
          user-facing screens directly in the Descope Console.
        </Typography>
        <br />
        <br />
        <div className="btn-desktop-view">
          <Button className="btn-learn">
            <span>Learn more</span>
          </Button>
        </div>
      </div>
      <div className="right-flow">
        <div className="inner-div">
          <Typography className="flow-content-right">
            UI screenshot / GIF of a Flow using magic link
          </Typography>
        </div>
      </div>
      <div className="btn-mobile-view">
        <Button className="btn-learn">
          <span>Learn more</span>
        </Button>
      </div>
    </div>
  );
};

export default Flows;
