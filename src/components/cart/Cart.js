import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Row, Typography } from "antd";
import { Button } from "antd";
import "./Cart.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from '@descope/react-sdk';
import { getAllEntries } from "../../services/apiManager";

function Cart() {
  const getProductData = JSON.parse(localStorage.getItem("selectedItem"));
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  const [screenDetails, setScreenDetails] = useState({});
  const getAllScreemDetails = async () => {
    try {
      const response = await getAllEntries('shoppingCart');
      setScreenDetails(response[0].fields);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem('pathState', 'CART');
    getAllScreemDetails();
  }, []);

  const [CART, setCART] = useState(getProductData);
  const handleRemove = (id) => {
    let updatedCart = CART.filter((item) => item.sys.id !== id);
    if (updatedCart <= 1) {
      navigate("/");
    }
    localStorage.setItem("selectedItem", JSON.stringify(updatedCart));
    let productDataFromLocalStorage = JSON.parse(
      localStorage.getItem("productData")
    )
      ? JSON.parse(localStorage.getItem("productData"))
      : [];
    let newArrivalDataFromLocalStorage = JSON.parse(
      localStorage.getItem("newArrivalData")
    )
      ? JSON.parse(localStorage.getItem("newArrivalData"))
      : [];
    productDataFromLocalStorage.map((item) => {
      if (item.sys.id === id) {
        item.fields.addedToCart = false;
      }
    });
    localStorage.setItem(
      "productData",
      JSON.stringify(productDataFromLocalStorage)
    );
    newArrivalDataFromLocalStorage.map((item) => {
      if (item.sys.id === id) {
        item.fields.addedToCart = false;
      }
    });
    localStorage.setItem(
      "newArrivalData",
      JSON.stringify(newArrivalDataFromLocalStorage)
    );
    navigate("/cart");
    return setCART(updatedCart);
  };

  const navigateThisTo = () => {
    if (authenticated) {
      navigate("/step-up");
    } else {
      navigate("/login");
      localStorage.setItem('pathState', 'CART');
    }
  }
  return (
    <div className="checkout-cart-container">
      <br />
      <Typography className="shopping-cart-heading">{screenDetails.heading}</Typography>
      <br />
      <br />
      {CART && CART.length > 0 ? (
        <div className="cart-container">
          <div className="row-col-con">
            <Typography className="items-text">{screenDetails.tableHeading}</Typography>
            {CART &&
              CART.length > 0 &&
              CART.map((product, id) => (
                <Row className="cart-row" key={id}>
                  <div className="cart-details">
                    <Col className="img-col">
                      <div className="product-img">
                        <img src={product.fields.image.fields.file.url} alt="cart"></img>
                      </div>
                    </Col>
                    <Col span={5} order={1}>
                      <Typography className="cart-product-title">
                        {product.fields.title}
                      </Typography>
                    </Col>
                    <Col span={5} order={3} className="product-quat">
                      <div className="counter">
                        <Button
                          type="seconday"
                          className="decrement-btn"
                          onClick={() => {
                            if (product.fields.quantity > 1) {
                              let _decrement = [...CART];
                              _decrement.map((item, index) => {
                                if (id === index) {
                                  item.fields.quantity = item.fields.quantity - 1
                                }
                              });
                              setCART(_decrement);
                            } else {
                              handleRemove(product.sys.id);
                            }
                          }}
                        >
                          -
                        </Button>
                        <div className="quantity">{product.fields.quantity}</div>
                        <Button
                          type="secondary"
                          className="increment-btn"
                          onClick={() => {
                            let _cart = [...CART];
                            _cart.map((item, index) => {
                              if (id === index) {
                                item.fields.quantity = item.fields.quantity + 1
                              } 
                            });
                            console.log('_CART => ', _cart);
                            setCART(_cart);
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </div>
                  <div className="price-details">
                    <Col span={5} order={4} className="product-price">
                      $ {(product.fields.price * product.fields.quantity).toFixed(2)}
                    </Col>
                    <Col
                      span={5}
                      order={4}
                      className="remove"
                      onClick={() => handleRemove(product.sys.id)}
                    >
                      <img
                        src={require("../../assets/Shape.svg").default}
                        alt="cart"
                        style={{ cursor: "pointer" }}
                      />
                    </Col>
                  </div>
                </Row>
              ))}
          </div>
          <br />
          <Typography className="cart-text">
            {screenDetails.footerText}
          </Typography>

          <div className="order-details">
            <div className="order-summary">
              <Typography className="order-total">{screenDetails.totalText}</Typography>
              <Typography className="price">
                $
                {CART.length > 0 &&
                  CART.map((products) => products.fields.price * products.fields.quantity)
                    .reduce((total, value) => total + value)
                    .toFixed(2)}
              </Typography>
            </div>
            <div className="proceed-btn">
              <Button 
                className="proceeed-btn"
                onClick={() => navigateThisTo()}
                >
                {screenDetails.proceedBtn}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-container">
          <br />
          <Typography className="cart-text">
            <Link to="/">{screenDetails.backBtnText}</Link>
          </Typography>

          <div className="order-details">
            <div className="order-summary">
              <Typography className="order-total">{screenDetails.totalText}</Typography>
              <Typography className="price">$</Typography>
            </div>
            <div className="proceed-btn">
              <Button
                className="proceeed-btn"
                disabled={(CART && CART.length === 0) || !CART}
              >
                {screenDetails.proceedBtn}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
