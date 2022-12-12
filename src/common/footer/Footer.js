import { Typography } from "antd";
import React from "react";
import { useLocation } from "react-router";
import arrowRight from "../../assets/arrow-right.svg";
import "./footer.css";

const Footer = () => {
  const location = useLocation();

  const url = ["/login","/sign-up"];

  return (
    // Footer section starts
    <>
      {url.includes(location.pathname) ? (
        <div className="footer-login">
          <Typography className="learn">
            Interested to learn how we built this login experience?
            &nbsp;&nbsp;&nbsp;
            <img src={arrowRight} alt="arrow" />
          </Typography>
        </div>
      ) : (
        <div className="footer-divider-first"></div>
      )}

      <div className="footer-wrapper">
        <Typography className="footer-content">
          Tee-Hee Tees is a sample application made with love by Descope
        </Typography>
      </div>
    </>
  );
};

export default Footer;
