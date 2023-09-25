const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Device = require("../models/device");
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  try {
    const data = await Item.find({});
    console.log(req.body);
    // console.log(re.params.id);
    if (!data) return res.status(400).send({ message: "Invalid link" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



router.get("/:id", async (req, res) => {
  try {
    const data = await Device.findOne({ deviceId: req.params.id });
    // console.log(re.params.id);
    if (!data) return res.status(400).send({ message: " abc" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// POST new data

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const item = await new Item({
      name: req.body.name,
      password: hashPassword,
      phoneNumber: req.body.phoneNumber,
      userType: req.body.userType,
    }).save();
    // const newData = await Item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const updatedItem = await Item.findByIdAndDelete(req.params.id);
    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const item = {
      name: req.body.name,
      password: hashPassword,
      phoneNumber: req.body.phoneNumber,
      userType: req.body.userType,
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, item);

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
