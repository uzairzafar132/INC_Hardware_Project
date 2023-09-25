const mongoose = require("mongoose");
const emailSchema = new mongoose.Schema({
  to: String,
  from: String,
  subject: String,
  body: String,
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
