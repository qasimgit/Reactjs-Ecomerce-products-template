import React from "react";
import "./product.css";

export const Products = ({ productData }) => {
  return (
    <div className="prodChild">
      <img className="prodImage" src={productData.imgUrl} alt="" />
      <div>
        <div className="prodNamePrice">
          <h2 className="prodName">{productData.name}</h2>
          <h2 className="prodPrice">${productData.price}</h2>
        </div>
        <div>
          <button className="prodButton">Buy Now</button>
          <button className="prodButton">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
