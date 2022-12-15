import React, { useEffect } from "react";
import { products } from "./type.js";
// import Header from '../header/Header';
import { useState } from "react";
import { Col, Row, Typography } from "antd";
import { Button } from "antd";
import "./Cart.css";
import { useNavigate } from "react-router";

function Cart() {
  const [productsData, setProductsData] = useState(products);
  
  const[CART,setCART] = useState(productsData)

  // useEffect(() => {
  //   setCART(productsData)
  // },[productsData])
  const handleRemove = (id) => {
  let updatedCart = CART.filter((item) => item.id !== id)
        if(updatedCart <= 1){
           navigate("/");
        }
      return setCART(updatedCart);
  };
      
  
  const navigate = useNavigate();

  return (
    <div className="checkout-cart-container">
      <br />
      <Typography className="shopping-cart-heading">Shopping Cart</Typography>
      <br />
      <br />
      <div className="cart-container">
        <div className="row-col-con">
          {CART.map((product, id) => (
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
                      if(product.quantity > 1){
                      const _DECREMENT = CART.map((item,index) => {
                       return id === index ? {...item, quantity: item.quantity - 1} : item
                      })
                      setCART(_DECREMENT)
                      }
                      else{
                        handleRemove(product.id);
                      }
                  }}
                  >
                    -
                  </Button>
                  <div className="quantity">{product.quantity}</div>
                  <Button
                    type="secondary"
                    className="increment-btn"
                    onClick={() => {
                       const _CART = CART.map((item,index) => {
                        return id === index ? {...item, quantity: item.quantity + 1} : item
                       })
                       setCART(_CART)
                    }}
                  >
                    +
                  </Button>
                </div>
              </Col>
              <Col span={5} order={4} className="product-price">
                {(product.price * product.quantity).toFixed(2)}
              </Col>
              <Col span={5} order={4} className="remove" 
                onClick={() => handleRemove(product.id)}
              
              >
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
            <Typography className="price">${CART.map(products => products.price * products.quantity).reduce(((total,value) => total + value)).toFixed(2)}</Typography>
          </div>
          <div className="proceed-btn">
            <Button
              className="proceeed-btn"
              onClick={() => navigate("/step-up")}
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
