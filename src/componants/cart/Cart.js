import React from "react";
import { products } from "./type.js";
// import Header from '../header/Header';
import { useState } from "react";
import { Col, Divider, Row, Typography } from "antd";
import { Button } from "antd";
import "./Cart.css";
import { useNavigate } from "react-router";
function Cart() {
  const [productsData, setProductsData] = useState(products);
  const [quantity, setQuantity] = useState(1);
  // const [itemprice, setPrice] = useState(products);

  const navigate = useNavigate();

  var existingId = productsData.findIndex((prod) => prod.id);
  const handleIncrement = (id) => {
    if (existingId >= 0) {
      setQuantity((id) => id + 1);
    }
  };

  const handleDecrement = (id) => {
    // setQuantity(prevCount => prevCount+1);
    if (existingId >= 0) {
      setQuantity((existingId) => existingId - 1);
    }
  };

  return (
    <div className="checkout-cart-container">
      <br />
      <Typography className="shopping-cart-heading">Shopping Cart</Typography>
      <br />
      <br />
      <div className="cart-container">
        <div className="row-col-con">
          {productsData.map((product, id) => (
            <Row className="cart-row" key={id}>
              <Col className="img-col">
                <div className="product-img">
                  <img src={product.image}></img>
                </div>
              </Col>
              <Col span={5} order={1} className="product-title">
                {product.title}
              </Col>
              <Col span={5} order={3} className="product-quat">
                <div className="counter">
                  <Button
                    type="seconday"
                    className="decrement-btn"
                    onClick={() => {
                      handleDecrement(product.id);
                    }}
                  >
                    -
                  </Button>
                  <div className="quantity">{quantity}</div>
                  <Button
                    type="secondary"
                    className="increment-btn"
                    onClick={() => {
                      handleIncrement(product.id);
                    }}
                  >
                    +
                  </Button>
                </div>
              </Col>
              <Col span={5} order={4} className="product-price">
                {product.price}
              </Col>
              <Col span={5} order={4} className="remove">
                <img src={require("../../assets/Shape.svg").default} />
              </Col>
            </Row>
          ))}
        </div>
        <br />
        <Typography className="cart-text">* To experience step-up authentication, change the number of cart items to more than 10.</Typography>
      
        
        <div className="order-details">
          <div className="order-summary">
            <Typography className="order-total">OrderTotal</Typography>
            <Typography className="price">$2.46</Typography>
          </div>
          <div className="proceed-btn">
            <Button
              className="proceeed-btn"
              onClick={() => navigate("/payment-success")}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
