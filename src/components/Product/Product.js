import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
  image,
  productId,
  name,
  description,
  price,
  ratings,
  imageURL,
}) => {
  return (
    <div className="box">
      <div className="slide-img">
        <img alt="product_image" src={image} />
        <div className="overlay">
          <Link to={`/product/${productId}`} className="buy-btn">
            Buy Now
          </Link>
        </div>
      </div>
      <div className="detail-box">
        <div className="type">
          <a href="/">{name}</a>
          <span>Ratings: {ratings.toFixed(1)}</span>
        </div>
        <a href="/" className="price">
          ₹{price}
        </a>
      </div>
    </div>
  );
};

export default Product;
