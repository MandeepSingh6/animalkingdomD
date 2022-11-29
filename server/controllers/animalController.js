const mongoose = require("mongoose");
const Animal = require("../models/Animal");

const getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find({});
    if (animals.length < 1) {
      res.send("No animal Found");
    } else {
      res.send(animals);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const createAnimal = async (req, res) => {
  try {
    console.log("enterd animal");
    const animal = await Animal.create(req.body);
    res.send(animal);
  } catch (error) {
    res.send(error.message);
  }
};
const getOneAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    if (!animal) {
      res.send("No animal Found");
    } else {
      res.send(animal);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!animal) {
      res.send("No animal Found");
    } else {
      res.send(animal);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndDelete(id);
    if (!animal) {
      res.send("No animal Found");
    } else {
      res.send(animal);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllAnimals,
  getOneAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
