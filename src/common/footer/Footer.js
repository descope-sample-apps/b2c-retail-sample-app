import { Typography } from "antd";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    // Footer section starts
    <>
      <div className="footer-divider-first"></div>
      <div className="footer-wrapper">
        <Typography className="footer-content">
          Tee-Hee Tees is a sample application made with love by Descope
        </Typography>
      </div>
    </>
  );
};

export default Footer;
