import { Button, Typography } from "antd";
import React from "react";
import "./flows.css";
import flow_image from "../../../assets/flow.jpg"

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
        <a
          href="https://docs.descope.com/build/guides/gettingstarted/"
          target="_blank"
        >
          <Button className="btn-learn">
            <span>Learn more</span>
          </Button>
          </a>
        </div>
      </div>
      <div className="right-flow">
        <div className="inner-div">
        <img src={flow_image} style={{width:"100%"}}></img>
        </div>
      </div>
      <div className="btn-mobile-view">
      <a
            href="https://docs.descope.com/build/guides/gettingstarted/"
            target="_blank"
          >
        <Button className="btn-learn">
         
            <span>Learn more</span>
        </Button>
        </a>

      </div>
    </div>
  );
};

export default Flows;
