import React from "react";
import "./HomePage.css";

// Components
import Product from "../../components/Product/Product";

const HomePage = ({ homeData }) => {
  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products....</h2>

      <div className="homepage__products">
        {homeData.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            productId={product.id}
            ratings={product.ratings}
            landingPageURL={product.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
