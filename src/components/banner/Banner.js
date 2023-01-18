import React, {useEffect, useState} from "react";
import { Button } from "antd";
import "./Banner.css";
import { useNavigate } from "react-router";
import LoginExperiences from "../loginExperiences/LoginExperiences";
import { useAuth } from '@descope/react-sdk'
import { createClient } from "contentful";

function Banner() {
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const [bannerData, setBannerData] = useState([]);

  const client = createClient({
    space: "lrv96uy3vip3",
    accessToken: "9PNQQmlDG8dH7WjW7DiyHrSB5kqywaURhnQ5Q8Unk5s",
  });

  const getAllEntries = async () => {
    try {
      const response = await client.getEntries({
        content_type: "homePageBanner",
      });
      const responseData = response.items;
      setBannerData(responseData);
      console.log('bannerData => ', responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEntries();
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
              authenticated ?
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
