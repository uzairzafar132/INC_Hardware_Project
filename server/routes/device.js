// Create a new device for a user
const User = require("../models/user");
const Device = require("../models/device")
const router = require("express").Router();

const Deivce = require("../models/device");

router.get("/:id", async (req, res) => {
  try {

    const data = await Deivce.find({ user: req.params.id });
    
    console.log(data);
    if (!data) return res.status(400).send({ message: "Invalid link" });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const deviceData = req.body;
    const device = new Device({
      ...deviceData,
      user: userId,
    });
    await device.save();
    res.send(device);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;