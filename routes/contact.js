const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config();
const {CONTACT_HTML_EN, CONTACT_TEXT_EN} = require('../email-templates/contactForm.js');

router.post("/sendMail", async (req, res) => {
  try {

    const {email, name, phone, message} = req.body;


    //1. Send an email using nodemailer with the link
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM_ADDRESS,
      to: process.env.EMAIL_FROM_ADDRESS,
      subject: `New message from ${name}`,
      html: CONTACT_HTML_EN(email, name, phone, message),
      text:  CONTACT_TEXT_EN(email, name, phone, message)
    };

    const info = await transporter.sendMail(mailOptions);
    res.json({info});
    

  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;