import { Button, Typography } from "antd";
import React from "react";
const ArrivalProducts = (product) => {
  const { addToCart, addedToCart } = product;

  return (
    <div className="product-details">
      <div>
        <img
          src={product.fields.image.fields.file.url}
          alt={`${product.fields.title}`}
          style={{
            width: "100%",
            background: " #B4B1B8",
            borderRadius: "4px",
            height: "9.2rem",
          }}
        />
      </div>

      <Typography className="title-product">{product.fields.title}</Typography>
      <div className="product-detail">
        <Typography className="price-product">
          ${product.fields.price}
        </Typography>
        <Button
          className="add-to-cart-btn"
          onClick={() => (product.fields.addedToCart ? "" : addToCart(product))}
        >
          {product.fields.addedToCart ? "Already Added" : "+ Add to cart"}
        </Button>
      </div>
    </div>
  );
};

export default ArrivalProducts;
