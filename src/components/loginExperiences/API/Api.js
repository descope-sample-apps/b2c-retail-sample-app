import { Button, Typography } from "antd";
import React from "react";
import "../Flows/flows.css";
import { useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';

const API = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `// Rest API call for signup or signin user
  
  curl -i -X POST 
    https://api.descope.com/v1/auth/otp/signup-in/email 
    -H 'Authorization: Bearer <project_id>' 
    -H 'Content-Type: application/json' 
    -d '{
        "externalId": "string",
        "loginOptions": {
        "stepup": true,
        "customClaims": {},
        "mfa": true
        }
    }'
`;
// const code = "var data=1;";
  return (
    <div className="main-flow-container">
      <div className="left-flow">
        <Typography className="flow-content">
          The Descope REST API enables you to add authentication to your app
          while retaining full control over your app and user experience.
        </Typography>
        <br />
        <br />
        <div className="btn-desktop-view">
        <a href="https://docs.descope.com/api/" target="_blank" rel="noreferrer">
          <Button className="btn-api">
            
              <span>See API reference</span>
          </Button>
          </a>

        </div>
      </div>
      <div className="right-flow">
        <div className="inner-div">
        <div className="Code">
            <pre style={{margin: 0}}>
              <code className={`language-javascript`} style={{"overflow-y": "scroll"}}>{code}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="btn-mobile-view">
      <a href="https://docs.descope.com/api/" target="_blank" rel="noreferrer">

        <Button className="btn-api">
            <span>See API reference</span>
        </Button>
        </a>

      </div>
    </div>
  );
};

export default API;
