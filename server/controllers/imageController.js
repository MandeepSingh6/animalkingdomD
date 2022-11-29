const mongoose = require("mongoose");
const Image = require("../models/Image");

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find({});
    if (images.length < 1) {
      res.send("No image Found");
    } else {
      res.send(images);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const createImage = async (req, res) => {
  try {
    const image = await Image.create(req.body);
    res.send(image);
  } catch (error) {
    res.send(error.message);
  }
};
const getOneImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findById(id);
    if (!image) {
      res.send("No image Found");
    } else {
      res.send(image);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const updateImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!image) {
      res.send("No image Found");
    } else {
      res.send(image);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    if (!image) {
      res.send("No image Found");
    } else {
      res.send(image);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllImages,
  getOneImage,
  createImage,
  updateImage,
  deleteImage,
};
