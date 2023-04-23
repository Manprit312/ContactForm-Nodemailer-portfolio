const express = require("express");
const app = express();
const contactController = require("./controller/contactController");
var mongoose = require("mongoose");
const contact = require("./models/contact");
const cors = require("cors");
var nodemailer = require("nodemailer");
app.use(cors());
const port = 2004;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: { user: "manpritkaur8427496261@gmail.com", pass: "afxcbznsakbfppyg" },
});

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
app.post("/", async (req, res) => {
  const mailOptions = {
    subject: req.body.subject,
    from: req.body.email,
    to: "manpritkaur8427496261@gmail.com",
    phone: req.body.phone,
    message: req.body.message,
    text: req.body.message,
    html: req.body.message,
  };
  transporter.sendMail(mailOptions, function (err, success) {
    if (err) {
      console.log(err);
    } else {
      console.log(success, "Email sent SuccessFully");
    }
  });
  const data = {
    subject: req.body.subject,
    from: req.body.email,
    to: "manpritkaur8427496261@gmail.com",
    phone: req.body.phone,
    message: req.body.message,
    text: req.body.message,
    html: req.body.message,
  };
  res.send(data);
  const neww = new contact({
    subject: req.body.subject,
    from: req.body.email,
    to: "manpritkaur8427496261@gmail.com",
    phone: req.body.phone,
    message: req.body.message,
    text: req.body.message,
    html: req.body.message,
  });

  neww.save();
});

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "manpritkaur8427496261@gmail.com",
//       pass: "P@rm1nd3",
//     },
//   });
//   transporter.sendMail(data, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
//   res.send({
//     message: "iyggiuiugi",
//     data: {
//       name: name,
//       phone: phone,
//       email: email,
//       age: age,
//       to: to,
//       from: from,
//     },
//   });
// });

mongoose.connect("mongodb://localhost:27017/contact").then(() => {
  console.log(">>>>>>>>>>>>>>>>>>>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
