require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectionUrl = process.env.connection_url;
const port = 9000;
const cors = require("cors");
const login = require("./routes/loginRoute");
const images = require("./routes/imagesRoutes");
const tickets = require("./routes/ticketsRoutes");
const animals = require("./routes/AnimalsRoutes");
const admin = require("./routes/AdminRoute");

app.use(express.json());
app.use(cors());

// app.use("/admin", admin);

app.use("/login", login);

app.use("/images", images);

app.use("/animals", animals);

app.use("/tickets", tickets);

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
