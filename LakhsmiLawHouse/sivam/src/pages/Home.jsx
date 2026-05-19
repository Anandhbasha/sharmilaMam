import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Card from "../components/Card";
import Slider from "../components/Slider";

import "../App.css";

const Home = () => {

  const Products = useSelector(
    (state) => state.Product.Products
  );

  const latestProducts =
    Products.slice(-11).reverse();

  const [visibleCount, setVisibleCount] =
    useState(0);

  const navigate = useNavigate();

  useEffect(() => {

    const interval = setInterval(() => {

      setVisibleCount((prev) => {

        if (prev >= Products.length) {

          clearInterval(interval);

          return prev;
        }

        return prev + 2;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, [Products]);

  return (

    <div className="homePage">

      {/* SLIDER */}
      <div className="sliderSection">

        <Slider />

      </div>

      {/* NEW ARRIVALS */}
      <div className="arrivalSection">

        <h1 className="arrivalTitle">
          New Arrivals
        </h1>

        <div className="booksContainer">

          {latestProducts
            .slice(0, visibleCount)
            .map((item) => (

              <Card
                key={item.id}
                {...item}
              />

            ))}

        </div>

        {/* BUTTON */}
        <div className="moreBtnSection">

          <button
            className="moreBtn"
            onClick={() =>
              navigate("/ProfessionalBooks")
            }
          >
            Click Here For More Books
          </button>

        </div>

      </div>

      {/* SOFTWARE SECTION */}
      <div className="softwareSection">

        <h1 className="softwareTitle">
          TDSMAN ETDS Software
        </h1>

        <p className="softwareText">
          Everything you need for
          error-free TDS/TCS compliance.
        </p>

        <div className="videoContainer">

          <video
            controls
            autoPlay
            muted
            loop
            className="softwareVideo"
          >

            <source
              src="/tdsman.mp4"
              type="video/mp4"
            />

          </video>

        </div>

      </div>

    </div>

  );
};

export default Home;