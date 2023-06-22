const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");

router
  .route("/")
  .get(donationController.getAllDonations)
  .post(donationController.createDonation);

router
  .route("/:id")
  .get(donationController.getOneDonation)
  .patch(donationController.updateDonation)
  .delete(donationController.deleteDonation);

module.exports = router;
