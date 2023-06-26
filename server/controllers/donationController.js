const mongoose = require("mongoose");
const Donation = require("../models/Donation");

const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find({});
    if (donations.length < 1) {
      res.send("No Donations Found");
    } else {
      res.send(donations);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);
    res.send(donation);
  } catch (error) {
    res.send(error.message);
  }
};

const getOneDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findById(id);
    if (!ticket) {
      res.send("No Donation Found!");
    } else {
      res.send(donation);
    }
  } catch (error) {
    res.send(error.message);
  }
};
const updateDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    if (!donation) {
      res.send("No Donation Found!");
    } else {
      res.send(donation);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const deleteDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donation.findByIdAndDelete(id);
    if (!donation) {
      res.send("No Donation Found!");
    } else {
      res.send(donation);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getAllDonations,
  getOneDonation,
  createDonation,
  updateDonation,
  deleteDonation,
};
