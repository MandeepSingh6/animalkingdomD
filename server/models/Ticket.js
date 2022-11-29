const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  tickets: { type: Number, required: true },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
