import { Button, Typography } from "antd";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "./newArrivals.css";
import ArrivalProducts from "./ArrivalProducts";
import { getAllEntries } from "../../services/apiManager";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
};

const NewArrivals = () => {
  const navigate = useNavigate();

  const getProductData =
    localStorage.getItem("selectedItem") &&
    JSON.parse(localStorage.getItem("selectedItem"))
      ? JSON.parse(localStorage.getItem("selectedItem"))
      : [];
  let newArrivalDataFromLocalStorage = JSON.parse(
    localStorage.getItem("newArrivalData")
  )
    ? JSON.parse(localStorage.getItem("newArrivalData"))
    : [];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [cartArray, setCartArray] = useState(getProductData);

  //const [products, setProducts] = useState(newArrivalDataFromLocalStorage);
  const [products, setProducts] = useState([]);

  // const getAllNewArrivalData = async () => {
  //   try {
  //     const response = await getAllEntries("newArrivalData");
  //     setProducts(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const query = `{
    newArrivalsHeading(id: "5xE2OcHC6PbhMk3BH9MC0s") {
      title
      subTitle
    }
    newArrivalDataCollection {
      items {
        sys {
          id
        }
        title
        price
        image {
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
        console.log(json.data);
        setProducts(json.data);
      });
  }, []);

  useEffect(() => {
    let arrivalArray = localStorage.getItem("newArrivalData")
      ? JSON.parse(localStorage.getItem("newArrivalData"))
      : [];
    if (arrivalArray.length > 0) {
      setProducts(arrivalArray);
    }
    // else {
    //   getAllNewArrivalData();
    // }
  }, []);
  const addToCart = (data) => {
    setCartArray([...cartArray, data]);
    let getSelectedCartArray = JSON.parse(localStorage.getItem("selectedItem"))
      ? JSON.parse(localStorage.getItem("selectedItem"))
      : [];

    navigate("/");
    let productsArray = [...products];
    productsArray.map((item) => {
      if (item.sys.id === data.sys.id) {
        item.fields.addedToCart = true;
        localStorage.setItem(
          "selectedItem",
          JSON.stringify([...getSelectedCartArray, item])
        );
      }
    });
    setProducts(productsArray);
    localStorage.setItem("newArrivalData", JSON.stringify(productsArray));
  };
  return (
    <div className="arrivals-container">
      <br />
      <br />
      <Typography className="title">
        {products.newArrivalsHeading && products.newArrivalsHeading.title}
      </Typography>
      <Typography className="sub-title">
        {products.newArrivalsHeading && products.newArrivalsHeading.subTitle}
      </Typography>

      <Slider {...settings} className="popular-product-container">
        {products.newArrivalDataCollection && (
          <>
            {products.newArrivalDataCollection.items.map((product) => {
              return (
                <ArrivalProducts
                  {...product}
                  key={product.sys.id}
                  addToCart={addToCart}
                />
              );
            })}
          </>
        )}
      </Slider>
      <br />
      <div className="view-wrap btn-wrap">
        <Button className="view-btn">
          <span className="view-more">View More</span>
        </Button>
      </div>
    </div>
  );
};

export default NewArrivals;
