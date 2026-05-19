import { useState, useEffect } from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Slider = () => {
  const banners = [<Banner1 />, <Banner2 />, <Banner3 />];
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  // ▶ Next
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  // ◀ Previous
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="slider">

      {/* Banner */}
      <div className="slide">
        {banners[index]}
      </div>

        </div>
  );
};

export default Slider;