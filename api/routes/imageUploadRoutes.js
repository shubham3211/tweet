const router = require("express").Router();
const { imageUpload } = require("../controller/imageUploadController");

router.route("/").get(imageUpload);

module.exports.router = router;
