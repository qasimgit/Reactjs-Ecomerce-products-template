import React, { useState, useEffect } from "react";
import { Header } from "./components";
import { Products } from "./components/product/product";
import "./app.css";
import DB from "./db.json";

const App = () => {
  const [products, setProducts] = useState([]);
  const [activeButton, setActiveButton] = useState("");
  const [search, setSearch] = useState("");git add .

  useEffect(() => {
    setProducts(DB.Products);
  }, []);

  let filteredData = products.sort((a, b) => {
    if (activeButton === "expensive") {
      return b.price - a.price;
    } else if (activeButton === "cheapest") {
      return a.price - b.price;
    }
  });

  filteredData = products.filter((val) => {
    if (search !== "") {
      if (val.name.toLowerCase().search(search.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  });
  console.log('filteredData', filteredData)

  return (
    <div>
      <Header />
      <div className="searchBar">
        <label htmlFor="search">Search By Name</label>
        <input
          type="text"
          size="50"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button
          className={activeButton === "expensive" ? "btn btn_active" : "btn"}
          onClick={() => setActiveButton("expensive")}
        >
          Most Expensive
        </button>
        <button
          className={activeButton === "cheapest" ? "btn btn_active" : "btn"}
          onClick={() => setActiveButton("cheapest")}
        >
          Cheapest
        </button>
      </div>
      <div className="product_list">
        {filteredData.map((val, index) => (
          <Products productData={val} key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
