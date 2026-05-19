import {useNavigate} from "react-router-dom";
import { useState } from "react";
import "../CustomerDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Slices.js/CartSlice";

const CustomerDetails = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cartItem =
  useSelector(
    (state) => state.Cart.cartItem
  );
  /* FORM DATA */

  const [formData, setFormData] = useState({
    first: "",
    last: "",
    address: "",
    district: "",
    state: "",
    country: "",
    mobile: "",
    mail: "",
  });

  /* POPUP STATE */

  const [showPopup, setShowPopup] = useState("");

  /* TOTAL */

  const total = cartItem.reduce(
    (sum, item) =>
      sum +
      Number(item.Price) *
      (item.quantity || 1),
    0
  );

  /* INPUT CHANGE */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };

  /* SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();
     if (formData.mobile.length !== 10) {

  setShowPopup("Enter the 10 digit mobile number");

  setTimeout(() => {

    setShowPopup("");

  }, 2000);

  return;

}
    try {

      const response = await fetch(
        "http://localhost:5000/send-order",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            formData,
            cartItem,
            total,
          }),

        }
      );

      /* CHECK RESPONSE */

      if (!response.ok) {

        throw new Error("Server Error");

      }

      const data = await response.json();

      console.log(data);

      /* SUCCESS */

      if (data.success) {

  /* SUCCESS POPUP */

  setShowPopup("success");

  /* CLEAR REDUX CART */

  dispatch(clearCart());

  /* CLEAR FORM */

  setFormData({

    first: "",
    last: "",
    address: "",
    district: "",
    state: "",
    country: "",
    mobile: "",
    mail: "",

  });

  /* OPTIONAL */


}

      /* FAILED */

      else {

        setShowPopup("failed");

      }

      /* AUTO HIDE */

      setTimeout(() => {

        setShowPopup("");

      }, 2000);

    }

    catch (error) {

      console.log(error);

      setShowPopup("error");

      setTimeout(() => {

        setShowPopup("");

      }, 2000);

    }

  };
 

  return (

    <>

      <div className="customer-page">

        {/* LEFT SECTION */}

        <div className="billing-section">

          <div className="checkout-header">

            <h1>
              Checkout
            </h1>

            <h2>
              Total : ₹{total}
            </h2>

          </div>

          <div className="billing-card">

            <h2>
              Billing Details
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="input-grid">

                <input
                  type="text"
                  name="first"
                  placeholder="First Name"
                  value={formData.first}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="last"
                  placeholder="Last Name"
                  value={formData.last}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="district"
                  placeholder="District"
                  value={formData.district}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />


                <input
                  type="email"
                  name="mail"
                  placeholder="Mail ID"
                  value={formData.mail}
                  onChange={handleChange}
                  required
                />

              </div>

              <button
                type="submit"
                className="place-order-btn"
              >
                Place Order
              </button>

            </form>

          </div>

        </div>

        {/* RIGHT SECTION */}

        <div className="cart-summary">

          <h2>
            Cart Summary
          </h2>

          {
            cartItem.map((item) => (

              <div
                key={item.id}
                className="summary-card"
              >

                <img
                  src={item.Image}
                  alt={item.Title}
                />

                <div>

                  <h3>
                    {item.Title}
                  </h3>

                  <p>
                    Qty : {item.quantity || 1}
                  </p>

                  <h4>
                    ₹
                    {
                      item.Price *
                      (item.quantity || 1)
                    }
                  </h4>

                </div>

              </div>

            ))
          }

          <div className="grand-total">

            <h2>
              Grand Total
            </h2>

            <h1>
              ₹{total}
            </h1>

          </div>

        </div>

      </div>

      {/* POPUP */}

      {showPopup && (

        <div className="success-popup">

          {
            showPopup === "success"
              ? "✅ Order Placed Successfully"
              : "❌ Something Went Wrong"
          }

        </div>

      )}

    </>

  );

};

export default CustomerDetails;