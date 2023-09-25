const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  userType: { type: String, required: true },
  password: { type: String, required: true },
});

dataSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "1d",
  });
  return token;
};

const Item = mongoose.model("item", dataSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    phoneNumber: Joi.string().email().required().label("Phone Number"),
    userType: Joi.string().required().label("userType"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};



module.exports = Item;
