import { Collapse, Tabs, Typography } from "antd";
import React from "react";
import "./loginExperiences.css";
import TabPane from "antd/es/tabs/TabPane";
import Flows from "./Flows/Flows";
import Sdk from "./SDK/Sdk";

import Api from "./API/Api";
const { Panel } = Collapse;

const LoginExperiences = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <Collapse onChange={onChange} expandIconPosition="end">
        <Panel
          header="Interested to learn how we built this login experience?"
          key="1"
        >
          <div>
            <Typography className="panel-title">
              This login experience was built using Descope Flows. You also have
              several other ways of implementing login with Descope – choose
              whichever one best fits your needs.
            </Typography>
          </div>
          <div className="tab-main-container">
            <div className="left-tab">
              <div>
                <Tabs defaultActiveKey="flows">
                  <Tabs.TabPane tab="Flows" key="flows">
                    <Flows />
                  </Tabs.TabPane>
                  <TabPane tab="SDKs" key="sdk">
                    <Sdk />
                  </TabPane>
                  <TabPane tab="API" key="api">
                    <Api />
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </>
  );
};

export default LoginExperiences;
