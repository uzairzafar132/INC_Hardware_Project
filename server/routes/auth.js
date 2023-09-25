const router = require("express").Router();
const User = require("../models/Item");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.get("/", async (req, res) => {
  try {
    //   const { error } = validate(req.body);
    //   if (error) return res.status(400).send({ message: error.details[0].message });

    const users = await User.find({});
    res.status(200).send({
      users: users,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    
    console.log(req.body);
    

    const user = await User.findOne({ name: req.body.name });
    console.log(user);

    

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });
    const token = user.generateAuthToken();
    res.status(200).send({
      data: token,
      id:user._id,
      userType:user.userType,
      message: "logged in successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("name"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
