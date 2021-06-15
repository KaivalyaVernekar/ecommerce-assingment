import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ image, productId, name, description, price, ratings }) => {
  return (
    /*<div className="product">
      <img src={image} alt="product_image" />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description}</p>

        <div className="price-rating__box">
          <p className="info__price">₹{price}</p>
          <p className="info__ratings">Ratings: {ratings.toFixed(1)}</p>
        </div>
        <div className="info__button">
          <Link to={`/product/${productId}`} className="info__button-links">
            View
          </Link>
          <Link to={`/cart`} className="info__button-links">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>*/

    <div class="box">
      <div class="slide-img">
        <img alt="product_image" src={image} />
        <div class="overlay">
          <Link to={`/product/${productId}`} className="buy-btn">
            Buy Now
          </Link>
        </div>
      </div>
      <div class="detail-box">
        <div class="type">
          <a href="/">{name}</a>
          <span>Noe Arrival</span>
        </div>
        <a href="/" class="price">
          ₹{price}
        </a>
      </div>
    </div>
  );
};

export default Product;
