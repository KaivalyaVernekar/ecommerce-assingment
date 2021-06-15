import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ image, productId, name, description, price, ratings }) => {
  return (
    <div className="product">
      <img src={image} alt="product_image" />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description}</p>

        <div className="price-rating__box">
          <p className="info__price">₹{price}</p>
          <p className="info__ratings">Ratings: {ratings.toFixed(1)}</p>
        </div>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
