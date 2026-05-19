import React from 'react';

const AboutUs = () => {

  return (

    <div
      className='aboutus'
      style={{
        padding: "30px 20px 60px",
        maxWidth: "1100px",
        margin: "auto",
        textAlign: "left"
      }}
    >

      {/* TITLE */}

      <h1
        className='glow'
        style={{
          fontSize: "3rem",
          marginBottom: "30px"
        }}
      >
        About Us
      </h1>

      {/* CONTENT */}

      <p
        style={{
          lineHeight: "2",
          fontSize: "1.1rem",
          color:"white" ,     paddingBottom: "30px"
        }}
      >

        Lakshmi Law House started its journey
        of selling law books in 1987 and since then
        every day has been a day of progress and satisfaction.

        <br /><br />

        We started with the business of commercial,
        taxation, legal and CA, CS, CMA academic books.

        <br /><br />

        As each passing day, the valid demands
        of law related software also increased,
        and we started providing the best services.

        <br /><br />

        Our clients include chartered accountants,
        corporates, company secretaries, advocates,
        institutional libraries, government departments,
        attorney firms and individual professionals
        across Tamil Nadu and India.

        <br /><br />

        Most institutions and colleges who require
        law books have placed their trust in us,
        and we continue to grow through their satisfaction.

        <br /><br />

        Moreover, we provide all types of statutory registers,
        forms, share certificates, minutes books,
        binders and common seals.

        <br /><br />

        We welcome you to explore our website
        and learn more about our products and services.

      </p>

      {/* THANK YOU */}

      <div
  style={{
    marginTop: "20px"
  }}
>

  <h2
    style={{
      fontSize: "2rem",
      color: "white"
    }}
  >
    😊 Thank You For Visiting Our Website 😊
  </h2>

</div>

    </div>
  );
};

export default AboutUs;