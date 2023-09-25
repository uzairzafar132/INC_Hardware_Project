const mongoose = require("mongoose");


const deviceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    type: String,
  },
  machineId: {
    type: String,
  },
  deviceId: {
    type: String,
  },
  permanentIn: {
    type: Number,
  },
  permanentOut: {
    type: Number,
  },
  permanentDiff: {
    type: Number,
  },
  totalIn: {
    type: Number,
  },
  totalOut: {
    type: Number,
  },
  totalDiff: {
    type: Number,
  },
  readingTake: {
    type: Date,
  },
});

const Device =mongoose.model("device", deviceSchema);
module.exports = Device;
