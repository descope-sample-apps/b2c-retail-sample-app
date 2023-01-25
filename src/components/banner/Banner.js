import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./Banner.css";
import { useNavigate } from "react-router";
import LoginExperiences from "../loginExperiences/LoginExperiences";
import { useAuth } from "@descope/react-sdk";
import { getAllEntries } from "../../services/apiManager";

function Banner() {
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const [bannerData, setBannerData] = useState([]);

  // const getAllBannerData = async () => {
  //   try {
  //     const response = await getAllEntries("homePageBanner");
  //     setBannerData(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllBannerData();
  // }, []);

  const query = `{
    homePageBanner(id:"6Tik5GnfQIXcB4dtWBkadO"){
      title
      subtitle
      btnText
      imageCollection{
        items{
          url
        }
      }
    }
  }`;

  useEffect(() => {
    fetch(
      "https://graphql.contentful.com/content/v1/spaces/lrv96uy3vip3?access_token=yF6NobP1xoWDPfSO6J6xq8ocl3hFUjYtPWvqAp41QrU",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setBannerData(json.data);
      });
  }, []);

  return (
    <>
      <div className="first-screen">
        <div className="container-col-2">
          <div className="container-section-1">
            <h1 className="hero-heading">
              {/* {bannerData.length > 0 && bannerData[0].fields.title} */}
              {bannerData.homePageBanner && bannerData.homePageBanner.title}
            </h1>
            <p className="hero-para">
              {/* {bannerData.length > 0 && bannerData[0].fields.subtitle} */}
              {bannerData.homePageBanner && bannerData.homePageBanner.subtitle}
            </p>
            {authenticated ? (
              <div
                className="sign-button"
                style={{ backgroundColor: "#efebfb" }}
              ></div>
            ) : (
              <Button
                className="sign-button"
                onClick={() => navigate("/login")}
              >
                {/* {bannerData.length > 0 && bannerData[0].fields.btnText} */}
                {bannerData.homePageBanner && bannerData.homePageBanner.btnText}
              </Button>
            )}
          </div>
          {/* for image  */}
          <div className="container-sec-2">
            <img
              src={
                // bannerData.length > 0 &&
                // bannerData[0].fields.image[0].fields.file.url
                bannerData.homePageBanner &&
                bannerData.homePageBanner.imageCollection.items[0].url
              }
              alt="sample-shirt-1"
            />
            <img
              src={
                // bannerData.length > 0 &&
                // bannerData[0].fields.image[1].fields.file.url
                bannerData.homePageBanner &&
                bannerData.homePageBanner.imageCollection.items[1].url
              }
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
