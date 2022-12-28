import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { productData } from "./ProductData";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "./product.css";
import ArrivalProducts from "../newArrivals/ArrivalProducts";

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

const Product = () => {
  const getProductData = JSON.parse(localStorage.getItem("selectedItem"))
    ? JSON.parse(localStorage.getItem("selectedItem"))
    : [];
  let productDataFromLocalStorage = JSON.parse(
    localStorage.getItem("productData")
  )
    ? JSON.parse(localStorage.getItem("productData"))
    : [];
  const [products, setProducts] = useState(productDataFromLocalStorage);
  const [cart, setCart] = useState(getProductData);
  const navigate = useNavigate();

  useEffect(() => {
    if (productDataFromLocalStorage.length === 0) {
      localStorage.setItem("productData", JSON.stringify(productData));
    }
    setProducts(JSON.parse(localStorage.getItem("productData")));
  }, []);

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
          initialSlide: 1,
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
  const addToCart = (data) => {
    setCart([...cart, data]);
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
    localStorage.setItem("productData", JSON.stringify(productsArray));
  };
  return (
    <div>
      <br />
      <br />
      <div className="main-header">
        <Typography className="title">Most Popular</Typography>
        <Typography className="sub-title">
          We love all our tees equally, but these ones are better
        </Typography>
      </div>

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

      <div className="view-wrap">
        <Button className="view-btn">
          <span className="view-more">View More</span>
        </Button>
      </div>
    </div>
  );
};

export default Product;
