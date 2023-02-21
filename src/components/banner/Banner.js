import React, {useEffect, useState} from "react";
import { Button } from "antd";
import "./Banner.css";
import { useNavigate } from "react-router";
import LoginExperiences from "../loginExperiences/LoginExperiences";
import { useSession } from '@descope/react-sdk'
import { getAllEntries } from "../../services/apiManager";

function Banner() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSession();
  const [bannerData, setBannerData] = useState([]);
  const getAllBannerData = async () => {
    try {
      const response = await getAllEntries("homePageBanner");
      setBannerData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBannerData();
  }, []);
  return (
    <>
      <div className="first-screen">
        <div className="container-col-2">
          <div className="container-section-1">
            <h1 className="hero-heading">{bannerData.length > 0 && bannerData[0].fields.title}</h1>
            <p className="hero-para">
            {bannerData.length > 0 && bannerData[0].fields.subtitle}
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
              {bannerData.length > 0 && bannerData[0].fields.btnText}
            </Button>
            }
          </div>
          {/* for image  */}
          <div className="container-sec-2">
            <img
              src={bannerData.length > 0 && bannerData[0].fields.image[0].fields.file.url}
              alt="sample-shirt-1"
            />
            <img
              src={bannerData.length > 0 && bannerData[0].fields.image[1].fields.file.url}
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
