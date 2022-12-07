import { Button, Typography } from "antd";
import React, { useState } from "react";
import ProductData from "./ProductData.json";
import Slider from "react-slick";
import "./product.css";
import ArrivalProducts from "../newArrivals/ArrivalProducts";

const SampleNextArrow = (props) => {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
};
const SamplePrevArrow = (props) => {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
};

const Product = () => {
  const [products, setProducts] = useState(ProductData);

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

  return (
    <div>
      <br />
      <br />
      <Typography className="title">Most Popular</Typography>
      <Typography className="sub-title">
        We love all our tees equally, but these ones are better
      </Typography>

      <Slider {...settings} className="popular-product-container">
        {products.map((product) => (
          <ArrivalProducts {...product} key={product.id} />
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
