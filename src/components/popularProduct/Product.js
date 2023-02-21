import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "./product.css";
import ArrivalProducts from "../newArrivals/ArrivalProducts";
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

const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


  const getAllProductData = async () => {
    try {
      const response = await getAllEntries('mostPopularProducts');
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let productArray = localStorage.getItem('productData') ? JSON.parse(localStorage.getItem('productData')) : []
    if (productArray.length > 0) {
      setProducts(productArray);
    } else {
      getAllProductData();
    }
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
    let getSelectedCartArray =
      localStorage.getItem("selectedItem") &&
      JSON.parse(localStorage.getItem("selectedItem"))
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
    localStorage.setItem("productData", JSON.stringify(productsArray));
  };
  return (
    <div style={{backgroundColor: '#FFFFFF'}}>
      <br />
      <br />
      <div className="main-header">
        <Typography className="title">Most Popular</Typography>
        <Typography className="sub-title">
          We love all our tees equally, but these ones are better
        </Typography>
      </div>

      <Slider {...settings} className="popular-product-container">
        {products.length > 0 && products.map((product, index) => {
          return (
            <ArrivalProducts
              {...product}
              key={product.sys.id}
              addToCart={addToCart}
            />
          );
        })}
      </Slider>
      <br />

    </div>
  );
};

export default Product;
