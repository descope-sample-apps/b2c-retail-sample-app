import React from "react";
import { Button } from "antd";
import "./Banner.css";
import { useNavigate } from "react-router";
import LoginExperiences from "../loginExperiences/LoginExperiences";
import { useSession } from '@descope/react-sdk'

function Banner() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSession();
  return (
    <>
      <div className="first-screen">
        <div className="container-col-2">
          <div className="container-section-1">
            <h1 className="hero-heading">Funny Tees, Laughably Low Prices</h1>
            <p className="hero-para">
              We could all do with a chuckle. Wear a Tee-Hee T-shirt today and
              spread some cheer!
            </p>
            {
              isAuthenticated ?
              <div
              className="sign-button"
              style={{backgroundColor: '#efebfb'}}
            >
            </div>
              :
            <Button
              className="sign-button"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            }
          </div>
          {/* for image  */}
          <div className="container-sec-2">
            <img
              src={require("../../assets/bannerimg1.svg").default}
              alt="sample-shirt-1"
            />
            <img
              src={require("../../assets/bannerimg2.svg").default}
              alt="sample-shirt-2"
            />
          </div>
        </div>
      </div>
      <LoginExperiences />
    </>
  );
}

export default Banner;
