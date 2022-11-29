const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
