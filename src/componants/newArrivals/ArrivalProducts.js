import { Button, Typography } from "antd";
import React from "react";

const ArrivalProducts = (product) => {
  const { image, title, price } = product;
  return (
    <div className="product-details">
      <img
        src={image}
        alt={`${title}`}
        style={{
          width: "100%",
          background: " #B4B1B8",
          borderRadius: "4px",
        }}
      />

      <Typography className="product-title">{title}</Typography>
      <div className="product-detail">
        <Typography className="product-price">{price}</Typography>
        <Button className="add-to-cart-btn">+ Add to cart</Button>
      </div>
    </div>
  );
};

export default ArrivalProducts;
