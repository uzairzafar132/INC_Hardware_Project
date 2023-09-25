// GET all data
const Item = require("../models/Item");

exports.getData = async (req, res) => {
  try {
    const data = await Item.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new data
exports.createData = async (req, res) => {
  const Item = new Item({
    area: req.body.area,
    date: req.body.date,
    numberOfUnits: req.body.materialUnit,
    numberOfCode: req.body.numberOfCode,
  });

  try {
    const newData = await Item.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
