const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

router
  .route("/")
  .get(animalController.getAllAnimals)
  .post(animalController.createAnimal);

router
  .route("/:id")
  .get(animalController.getOneAnimal)
  .patch(animalController.updateAnimal)
  .delete(animalController.deleteAnimal);

module.exports = router;
