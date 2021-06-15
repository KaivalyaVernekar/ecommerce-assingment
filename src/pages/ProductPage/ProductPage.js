import React from "react";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productpage">
      <div className="productpage__left">
        <div className="left__image">
          <img
            src="http://assets.myntassets.com/assets/images/2310365/2018/2/1/11517487630366-Roadster-Men-Black-Solid-Round-Neck-T-shirt-5871517487630224-1.jpg"
            alt="product_image"
          />
        </div>

        <div className="left__info">
          <p className="left__name">Men Shirt</p>
          <p>Price: ₹650</p>
          <p>
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eos quidem autem dolore alias, perferendis at!"
          </p>
        </div>
      </div>

      <div className="productpage__right">
        <div className="right__info">
          <p>
            Price:
            <span>₹650</span>
          </p>

          <p>
            Status:
            <span>In Stock</span>
          </p>

          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
