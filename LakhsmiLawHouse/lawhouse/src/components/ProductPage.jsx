import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";

const ProductPage = () => {
  const products = useSelector((state) => state.Product.Products);

  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      
      {/* 🔍 Search Bar */}
      <SearchBar onSearch={setQuery} />

      {/* 🔍 Search Results */}
      {query !== "" &&
        products
          .filter((item) =>
            item.Title.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
            <p
              key={item.id}
              onClick={() => setSelectedProduct(item)}
              style={{ cursor: "pointer", color: "black" }}
            >
              {item.Title}
            </p>
          ))}

      {/* 📦 Selected Product Card */}
      {selectedProduct && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            background: "white",
            color: "black",
            width: "500px",
            alignItems:'center'
          }}
        >
          <h2>{selectedProduct.Title}</h2>
          <p>Price: ₹{selectedProduct.Price}</p>
          <p>Category: {selectedProduct.Category}</p>

          <img
            src={selectedProduct.Image}
            alt={selectedProduct.Title}
            width="200"
          />
        </div>
      )}
    </div>
  );
};

export default ProductPage;