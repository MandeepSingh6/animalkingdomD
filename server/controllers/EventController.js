const Event = require("../models/Event");

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    if (events.length < 1) {
      res.send("No Events!");
    } else {
      res.send(events);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const createEvent = async (req, res) => {
  try {
    console.log("entered create Event", req.body);
    const event = await Event.create(req.body);
    res.send(event);
  } catch (error) {
    res.send(error.message);
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!event) {
      res.send("No Event Found!");
    } else {
      res.send(event);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await findByIdAndDelete(id);
    if (!event) {
      res.send("No event found!");
    } else {
      res.send(event);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { getAllEvents, createEvent, updateEvent, deleteEvent };
