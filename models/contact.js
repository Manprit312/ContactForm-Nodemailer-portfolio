// External Dependancies
const mongoose = require("mongoose");

const contactScheme = new mongoose.Schema({
  to: String,
  name: String,
  phone: Number,
  email: String,
});

module.exports = mongoose.model("Contact", contactScheme);
