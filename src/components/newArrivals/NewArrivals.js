import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import { newArrivalData } from "./NewArrivalData";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "./newArrivals.css";
import ArrivalProducts from "./ArrivalProducts";

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

  const getProductData = JSON.parse(localStorage.getItem("selectedItem"))
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

  const [products, setProducts] = useState(newArrivalDataFromLocalStorage);

  useEffect(() => {
    if (newArrivalDataFromLocalStorage.length === 0) {
      localStorage.setItem("newArrivalData", JSON.stringify(newArrivalData));
    }
    setProducts(JSON.parse(localStorage.getItem("newArrivalData")));
  }, []);

  const addToCart = (data) => {
    setCartArray([...cartArray, data]);
    let getSelectedCartArray = JSON.parse(localStorage.getItem("selectedItem"))
      ? JSON.parse(localStorage.getItem("selectedItem"))
      : [];
    localStorage.setItem(
      "selectedItem",
      JSON.stringify([...getSelectedCartArray, data])
    );
    navigate("/");
    let productsArray = [...products];
    productsArray.map((item) => {
      if (item.id === data.id) {
        item.addedToCart = true;
      }
    });
    setProducts(productsArray);
    localStorage.setItem("newArrivalData", JSON.stringify(productsArray));
  };
  return (
    <div className="arrivals-container">
      <br />
      <br />
      <Typography className="title">New Arrivals</Typography>
      <Typography className="sub-title">
        Get in early on these future bestsellers
      </Typography>

      <Slider {...settings} className="popular-product-container">
        {products.map((product) => (
          <ArrivalProducts
            {...product}
            key={product.id}
            addToCart={addToCart}
          />
        ))}
      </Slider>
      <br />
    </div>
  );
};

export default NewArrivals;
