import { Button, Typography } from "antd";
import React from "react";
import { useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import "./sdk.css";
import Prism from 'prismjs';

const Sdk = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  // The code snippet you want to highlight, as a string
const code = `// Import Descope SDK
import descopeSdk from '@descope/web-js-sdk';

//Create SDK with project_id
const sdk = descopeSdk({ projectId: <project_id> });

// user object with user details from the form
user = { "name": "Joe Person", "phone": "555-555-5555", "email": "email@company.com"};

// identifier for the user to send the OTP to
identifier = "email@company.com";

// Delivery Method
delivery_method = "email";

// Call the function for signing up user
resp = await sdk.otp.signUpOrIn[delivery_method].(identifier, user);
`;
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
        <a
              href="https://docs.descope.com/build/guides/client_sdks/"
              target="_blank"
            >
          <Button className="btn-client-sdk">
              <span>Client SDKs</span>
          </Button>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
              href="https://docs.descope.com/build/guides/backend_sdks/"
              target="_blank"
            >
          <Button className="btn-client-sdk">
              <span>Backend SDKs</span>
          </Button>
          </a>
        </div>
      </div>
      <div className="right-flow">
        <div className="inner-div">
          <div className="Code">
            <pre>
              <code className={`language-javascript`} style={{"overflow-y": "scroll"}}>{code}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="btn-mobile-view">
      <a
            href="https://docs.descope.com/build/guides/client_sdks/"
            target="_blank"
          >
        <Button className="btn-client-sdk">
            <span>Client SDKs</span>
        </Button>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
            href="https://docs.descope.com/build/guides/backend_sdks/"
            target="_blank"
          >
        <Button className="btn-client-sdk">
            <span>Backend SDKs</span>
        </Button>
        </a>
      </div>
    </div>
  );
};

export default Sdk;
