const mongoose = require("mongoose");

const donationSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  amount: { type: Number, required: true },
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
