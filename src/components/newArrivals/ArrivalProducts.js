import { Button, Typography } from "antd";
import React from "react";
const ArrivalProducts = (product) => {
  const { image, title, price, addToCart, addedToCart } = product;

  return (
    <div className="product-details">
      <div>
        <img
          src={image}
          alt={`${title}`}
          style={{
            width: "100%",
            background: " #B4B1B8",
            borderRadius: "4px",
            height: "9.2rem",
          }}
        />
      </div>

      <Typography className="title-product">{title}</Typography>
      <div className="product-detail">
        <Typography className="price-product">${price}</Typography>
        <Button
          className="add-to-cart-btn"
          onClick={() => (addedToCart ? "" : addToCart(product))}
        >
          {addedToCart ? "Already Added" : "+ Add to cart"}
        </Button>
      </div>
    </div>
  );
};

export default ArrivalProducts;
