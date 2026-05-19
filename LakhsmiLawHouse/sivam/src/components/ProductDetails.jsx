import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { addtoCart } from "../Slices.js/CartSlice";

import "../ProductPage.css";

const ProductDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.Product.Products
  );

  const prods = products.find(
    (item) => item.id === Number(id)
  );

  if (!prods) {

    return (

      <h2 className="notFound">
        Product not found 😢
      </h2>

    );
  }

  /* BOOK DISCOUNT */

  const discountPrice =
    Math.round(
      prods.Price -
      (prods.Price * 15) / 100
    );

  /* SOFTWARE GST */

  const gstPrice =
    Math.round(
      prods.Price +
      (prods.Price * 18) / 100
    );

  return (

    <div className="productDetailsPage">

      {/* LEFT SIDE */}

      <div className="productImageSection">

        <img
          src={prods.Image}
          alt={prods.Title}
          className="detailsImage"
        />

      </div>

      {/* RIGHT SIDE */}

      <div className="productInfoSection">

        <h1 className="detailsTitle">

          {prods.Title}

        </h1>

        {/* BOOK PRICE */}

        {
          prods.type === "book" && (

            <div className="priceBox">

              <span
                style={{
                  textDecoration:
                    "line-through",
                  color: "white",
                  display: "block",
                  fontSize: "18px"
                }}
              >
                Actual Price :
                ₹{prods.Price}
              </span>

              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "28px",
                  display: "block",
                  marginTop: "10px"
                }}
              >
                15% Discount Price :
                ₹{discountPrice}
              </span>

            </div>
          )
        }

        {/* SOFTWARE PRICE */}

        {
          prods.type === "software" && (

            <div className="priceBox">

              <span
                style={{
                  color: "white",
                  display: "block",
                  fontSize: "18px"
                }}
              >
                Actual Price :
                ₹{prods.Price}
              </span>

              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "28px",
                  display: "block",
                  marginTop: "10px"
                }}
              >
                Including 18% GST :
                ₹{gstPrice}
              </span>

            </div>
          )
        }

        {/* TAX */}

        <p className="detailsTax">

          {prods.tax}

        </p>

        {/* DESCRIPTION */}

        <div className="descriptionBox">

          <h3>Description</h3>

          <p>

            {prods.Description}

          </p>

        </div>

        {/* BUTTON */}

        <button
          className="detailsBtn"
          onClick={() =>
            dispatch(addtoCart(prods))
          }
        >

          Add To Cart

        </button>

      </div>

    </div>
  );
};

export default ProductDetails;