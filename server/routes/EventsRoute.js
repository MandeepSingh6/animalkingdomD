const express = require("express");
const router = express.Router();
const eventController = require("../controllers/EventController");

router
  .route("/")
  .get(eventController.getAllEvents)
  .post(eventController.createEvent);

router
  .route("/:id")
  .patch(eventController.updateEvent)
  .delete(eventController.deleteEvent);

module.exports = router;
