import React, { useState, useEffect } from "react";
import { Header, Content, Footer } from "./components";
import { Products } from "./components/product/product";
import "./app.css";
import DB from "./db.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    setProducts(DB.Products);
  }, []);

  products.sort((a, b) => {
    if (activeButton == "expensive") {
      return b.price - a.price;
    } else if (activeButton == "cheapest") {
      return a.price - b.price;
    }
  });

  return (
    <div>
      <Header />
      <div className="btn_container">
        <button
          className={activeButton == "expensive" ? "btn btn_active" : "btn"}
          onClick={() => setActiveButton("expensive")}
        >
          Most Expensive
        </button>
        <button
          className={activeButton == "cheapest" ? "btn btn_active" : "btn"}
          onClick={() => setActiveButton("cheapest")}
        >
          Cheapest
        </button>
      </div>
      <div className="product_list">
        {products.map((val, index) => (
          <Products productData={val} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;