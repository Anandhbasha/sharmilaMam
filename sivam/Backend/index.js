import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* ORDER ROUTE */

app.post("/send-order", async (req, res) => {

  try {

    const {
      formData,
      cartItem,
      total
    } = req.body;

    /* MAIL TRANSPORTER */

    const transporter =
      nodemailer.createTransport({

        service: "gmail",

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },

      });

    /* PRODUCT HTML */

    const productList = cartItem.map((item) => {

      let finalPrice = item.Price;

      if (item.type === "book") {

        finalPrice =
          item.Price -
          (item.Price * 15) / 100;

      }

      else if (
        item.type === "software"
      ) {

        finalPrice =
          item.Price +
          (item.Price * 18) / 100;

      }

      return `
        <tr>
          <td>${item.Title}</td>
          <td>${item.quantity}</td>
          <td>₹${Math.round(finalPrice)}</td>
        </tr>
      `;

    }).join("");

    /* EMAIL TEMPLATE */

    const mailOptions = {

      from: process.env.EMAIL_USER,

      to: formData.mail,

      subject:
        "Lakshmi Law House - Order Confirmation",

      html: `

      <div style="
        font-family:sans-serif;
        padding:20px;
      ">

        <h1 style="
          color:#ea580c;
        ">
          Order Confirmed ✅
        </h1>

        <p>
          Hello
          <b>
            ${formData.first}
            ${formData.last}
          </b>
        </p>

        <p>
          Thank you for your order.
        </p>

        <h2>
          Order Summary
        </h2>

        <table border="1"
          cellpadding="10"
          cellspacing="0"
          width="100%"
        >

          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>

          ${productList}

        </table>

        <h2>
          Grand Total :
          ₹${Math.round(total)}
        </h2>

        <br/>

        <p>
          Regards,
        </p>

        <h3>
          Lakshmi Law House
        </h3>

      </div>
      `
    };

    /* SEND MAIL */

    await transporter.sendMail(
      mailOptions
    );

    res.status(200).json({
      success: true,
      message:
        "Mail Sent Successfully"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Mail Sending Failed"
    });

  }

});

app.listen(5000, () => {

  console.log(
    "Server Running on Port 5000"
  );

});