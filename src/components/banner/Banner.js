import React from "react";
import { Button, Typography } from "antd";
import "./Banner.css";
import { useNavigate } from "react-router";
import LoginExperiences from "../loginExperiences/LoginExperiences";

function Banner() {
  const navigate = useNavigate();

  return (
    <>
      <div className="first-screen">
        <div className="container-col-2">
          <div className="container-section-1">
            <h1 className="hero-heading">Funny Tees, Laughably Low Prices</h1>
            <p className="hero-para">
              We could all do with a chuckle. Wear a Tee-<br></br>Hee T-shirt
              today and spread some cheer!
            </p>
            <Button
              className="sign-button"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </Button>
          </div>
          {/* for image  */}
          <div className="container-sec-2">
            <img src={require("../../assets/bannerimg1.svg").default} />
            <img src={require("../../assets/bannerimg2.svg").default} />
          </div>
        </div>
      </div>
      <LoginExperiences />
    </>
  );
}

export default Banner
