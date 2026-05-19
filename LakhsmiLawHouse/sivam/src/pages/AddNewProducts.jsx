import { useState } from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "../Slices.js/ProductSlice";
import "../App.css";


const AddNewProducts = () => {

  const dispatch = useDispatch();

  const [product, setProduct] = useState({

    Title: "",
    Price: "",
    Category: "",
    type: "",
    Description: "",
    Image: ""

  });

  const handleChange = (e) => {

    setProduct({

      ...product,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const newProduct = {

      id: Date.now(),

      ...product,

      Price: Number(product.Price)

    };

    dispatch(addProduct(newProduct));

    alert("Product Added Successfully 😎");

    setProduct({

      Title: "",
      Price: "",
      Category: "",
      type: "",
      Description: "",
      Image: ""

    });

  };

  return (

    <div className="AddeNewProd"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop:"20vh",
        background: "#f8fafc",
        padding: "40px 20px",width:"100%",      }}
    >

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          width:"60%",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#16a34a",fontSize:"2.5em"
          }}
        >
          Add New Product
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >

          <input
            type="text"
            name="Title"
            placeholder="Product Title"
            value={product.Title}
            onChange={handleChange}
            style={{padding:"10px",borderRadius:"15px",width:"50vw"}}
          />

          <input
            type="number"
            name="Price"
            placeholder="Price"
            value={product.Price}
            onChange={handleChange}
            style={{padding:"10px",borderRadius:"15px"}}
          />

          <input
            type="text"
            name="Category"
            placeholder="Category"
            value={product.Category}
            onChange={handleChange}
            style={{padding:"10px",borderRadius:"15px"}}
          />

          <input
            type="text"
            name="type"
            placeholder="Type"
            value={product.type}
            onChange={handleChange}
            style={{padding:"10px",borderRadius:"15px"}}
          />

          <input
            type="text"
            name="Image"
            placeholder="Image URL"
            value={product.Image}
            onChange={handleChange}
            style={{padding:"10px",borderRadius:"15px"}}
          />

          <textarea
            name="Description"
            placeholder="Description"
            rows="5"
            value={product.Description}
            onChange={handleChange}
            style={{padding:"10px",borderRadius:"15px"}}
          />

          <button
            type="submit"

            style={{
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer"
            }}
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddNewProducts;