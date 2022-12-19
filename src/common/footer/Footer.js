import { Typography } from "antd";
import React from "react";
import { useLocation } from "react-router";
import LoginExperiences from "../../componants/loginExperiences/LoginExperiences";
import "./footer.css";

const Footer = () => {
  const location = useLocation();

  const url = ["/login", "/sign-up"];

  return (
    // Footer section starts
    <>
      {url.includes(location.pathname) ? (
        <LoginExperiences />
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
