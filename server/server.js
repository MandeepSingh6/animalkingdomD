require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectionUrl = process.env.connection_url;
// const connectionUrl = "mongodb://localhost:27017/AnimalKingdomPark";
const port = 4000;
const cors = require("cors");
const login = require("./routes/loginRoute");
const images = require("./routes/imagesRoutes");
const tickets = require("./routes/ticketsRoutes");
const animals = require("./routes/AnimalsRoutes");
const donations = require("./routes/donationsRoutes");

app.use(express.json());
app.use(cors());

app.use("/login", login);

app.use("/images", images);

app.use("/animals", animals);

app.use("/tickets", tickets);

app.use("/donations", donations);

const start = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log("Connected to database");
    app.listen(port, () => {
      console.log("Listening on port " + port);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
