import itact from "../assets/images/itact.jpg";
import direct from "../assets/images/direct.jpg";
import rec from "../assets/images/reckoner.jpg";

import "../Banner.css";

const Banner1 = () => {

  return (

    <div className="banner1" >

      {/* LEFT CONTENT */}
      <div className="bannerContent" style={{marginLeft:"40px"}}>

        <h1 className="bannerTitle">
          Professional Tax Solutions
        </h1>

        <h3 className="bannerSubTitle">
          Complete library for Tax,
          Corporate & Compliance Professionals
        </h3>

        <p className="bannerText">

          Access updated Bare Acts,
          Direct Tax guides,
          Reckoners and IT publications
          designed for professionals,
          auditors and legal experts.

        </p>

        <button className="bannerBtn">
          Explore Books
        </button>

      </div>

      {/* RIGHT IMAGES */}
      <div className="banner-image bannerBooks">

        <div className="bookCard">
          <img src={itact} alt="" />
        </div>

        <div className="bookCard">
          <img src={rec} alt="" />
        </div>

        <div className="bookCard">
          <img src={direct} alt="" />
        </div>

      </div>

    </div>
  );
};

export default Banner1;