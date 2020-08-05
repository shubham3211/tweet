const router = require("express").Router();
const tweetController = require("../controller/tweetController");

router.route("/create").post(tweetController.createTweet);
router.route("/:tweetId").get(tweetController.getHashTags);

module.exports.router = router;
