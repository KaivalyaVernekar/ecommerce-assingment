import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <img
        src="http://assets.myntassets.com/assets/images/2310365/2018/2/1/11517487630366-Roadster-Men-Black-Solid-Round-Neck-T-shirt-5871517487630224-1.jpg"
        alt="product_image"
      />

      <div className="product__info">
        <p className="info__name">Product 1</p>

        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quidem
          autem dolore alias, perferendis at!
        </p>

        <p className="info__price">₹650</p>

        <Link to={`/product/${11}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
