import { Button, Typography} from "antd";
import React from "react";
import "../SDK/sdk.scss";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";
import Prism from "prismjs";


const Flows = () => {
    // The code snippet you want to highlight, as a string
    const code = 
`// Wrapping react App with <AuthProvider>
<AuthProvider projectId=YOUR_PROJECT_ID>
    <App />
</AuthProvider>

// Embedding Descope flow component
<Descope
    flowId="sign-up-or-in"
    onSuccess={(e) => {
        console.log("Logged in")
        console.log("Username", e.detail.user.name)
        console.log("Email", e.detail.user.email)
    }}
    onError={(e) => {
        console.log("Error!", e)
    }
    theme="light"
/>`;
useEffect(() => {
  Prism.highlightAll();
}, []);
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
          rel="noreferrer"
        >
          <Button className="btn-learn">
            <span>Learn more</span>
          </Button>
          </a>
        </div>
      </div>
      <div className="right-flow">
        <div className="inner-div">
          <div className="Code">
            <pre style={{ margin: 0 }}>
              <code
                className={`language-javascript`}
                style={{ "overflow-y": "scroll" }}
              >
                {code}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="btn-mobile-view">
      <a
            href="https://docs.descope.com/build/guides/gettingstarted/"
            target="_blank"
            rel="noreferrer"
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
