import { useDispatch } from "react-redux";
import { addtoCart } from "../Slices.js/CartSlice";
import { useNavigate } from "react-router";

const Card = ({
  id,
  Title,
  Price,
  Image,
  Category,
  description,
  tax,
  type
}) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAdd = (e) => {

    e.stopPropagation();

    dispatch(
      addtoCart({
        id,
        Title,
        Price,
        Category,
        Image,
        description,
        type
      })
    );
  };

  /* BOOK DISCOUNT */
  const discountPrice =
    Math.round(
      Price - (Price * 15) / 100
    );

  /* SOFTWARE GST */
  const gstPrice =
    Math.round(
      Price + (Price * 18) / 100
    );

  return (

    <div
      className="Card"
      onClick={() =>
        navigate(`/product/${id}`)
      }
    >

      {/* IMAGE */}

      <div className="cardBtm">

        <img
          src={Image}
          alt={Title}
        />

      </div>

      {/* CONTENT */}

      <div className="cardBtm">

        <p>{Title}</p>

        {/* BOOK PRICE */}

        {
          type === "book" && (

            <div>

              <span
                style={{
                  textDecoration:
                    "line-through",
                  color: "gray",
                  display: "block",
                  fontSize: "14px"
                }}
              >
                Actual Price : ₹{Price}
              </span>

              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                  display: "block",
                  marginTop: "5px"
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
          type === "software" && (

            <div>

              <span
                style={{
                  color: "#333",
                  display: "block"
                }}
              >
                Actual Price : ₹{Price}
              </span>

              <span
                style={{
                  color: "orangered",
                  fontWeight: "bold",
                  display: "block",
                  marginTop: "5px"
                }}
              >
                Including 18% GST :
                ₹{gstPrice}
              </span>

            </div>
          )
        }

        {/* BUTTON */}

        <button
          onClick={handleAdd}
          style={{
            backgroundColor:
              "rgb(234 89 12)",
            color: "white",
            borderRadius: "30px",
            padding: "10px 18px",
            border: "none",
            marginTop: "12px",
            cursor: "pointer"
          }}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
};

export default Card;