const mongoose = require("mongoose");
const Ticket = require("../models/Ticket");

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({});
    if (tickets.length < 1) {
      res.send("No ticket Found");
    } else {
      res.send(tickets);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const createTicket = async (req, res) => {
  console.log("enteredTicketsCreate");
  console.log("reqBody", req.body);
  try {
    const ticket = await Ticket.create(req.body);
    res.send(ticket);
  } catch (error) {
    res.send(error.message);
  }
};
const getOneTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findById(id);
    if (!ticket) {
      res.send("No ticket Found");
    } else {
      res.send(ticket);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!ticket) {
      res.send("No ticket Found");
    } else {
      res.send(ticket);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByIdAndDelete(id);
    if (!ticket) {
      res.send("No ticket Found");
    } else {
      res.send(ticket);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllTickets,
  getOneTicket,
  createTicket,
  updateTicket,
  deleteTicket,
};
