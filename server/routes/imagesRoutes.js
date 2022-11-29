const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController")

router
    .route("/")
    .get(imageController.getAllImages)
    .post(imageController.createImage);

router.route("/:id")
    .get(imageController.getOneImage)
    .patch(imageController.updateImage)
    .delete(imageController.deleteImage);

module.exports = router;
