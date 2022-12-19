import { Button, Typography } from "antd";
import React, { useState } from "react";
import { newArrivalData } from "./NewArrivalData";
import Slider from "react-slick";

import "./newArrivals.css";
import ArrivalProducts from "./ArrivalProducts";

const SampleNextArrow = (props) => {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
};
const SamplePrevArrow = (props) => {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
};

const NewArrivals = () => {
  const getProductData = JSON.parse(localStorage.getItem("selectedItem")) ? JSON.parse(localStorage.getItem("selectedItem")) : [];

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

  const [products, setProducts] = useState(newArrivalData);
  const addToCart = (data) => {
    setCartArray([...cartArray, data]);
    let getSelectedCartArray = JSON.parse(localStorage.getItem("selectedItem")) ? JSON.parse(localStorage.getItem("selectedItem")) : [];
    localStorage.setItem('selectedItem', JSON.stringify([...getSelectedCartArray, data]));
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
          <ArrivalProducts {...product} key={product.id} addToCart={addToCart}/>
        ))}
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
