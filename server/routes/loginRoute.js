const express = require("express");
const router = express.Router();
const cors = require("cors");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (username === "Admin" && password === "1234") {
      res.send("correct");
    } else {
      res.send("error");
    }
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
