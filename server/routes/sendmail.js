const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const Email = require("../models/Email");
const Sendmail = async (req, res) => {
  // app.post('/sendmail', (req, res) => {
  //     const recipientEmail = req.body.Email;
  //     const subject = req.body.Subject;
  //     const messageBody = req.body.Message;});


  const newEmail = new Email({
    to: req.body.email,
    from: process.env.Email,
    subject: req.body.subject,
    body: req.body.message,
  });
  try {
    const savedData = await newEmail.save();
    console.log("Data saved successfully:", savedData);
    // send email with nodemailer
    res.send("Data saved successfully and email sent.");
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).send("Error saving data.");
  }
  try {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.Email,
        pass: process.env.pass,
      },
    });
    const mailOptions = {
      from: `${process.env.EMAIL_ADDRESS} `,
      to: req.body.email,
      subject: req.body.subject,
      html: req.body.message,
    };

    await transporter.verify();
    transporter.sendMail(mailOptions, async (err, response) => {
      if (err) {
        res
          .status(500)
          .json({ type: "failure", result: "Server Not Responding" });
        return;
      } else {
        //do something herer
      }
    });
  } catch (error) {
    console.log(error + "error");
    return res.json({ type: "failure", result: error.message });
  }
};

module.exports = Sendmail;
