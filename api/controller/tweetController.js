const Tweet = require("../models/tweet");
const { CustomError } = require("../services/customError");
const logger = require("../../config/logger");

const createTweet = async (req, res) => {
  try {
    if (!req.body.caption) {
      throw new CustomError({ message: "Incomplete Credentials" });
    }
    const newTweet = await new Tweet({ tweet: req.body.caption });
    return res.send({ message: "Tweet Created", tweet: newTweet });
  } catch (err) {
    logger.error(err);
    let status = err.status ? err.status : 500;
    res.status(status).send({ message: err.message, done: false });
  }
};

const getHashTags = async (req, res) => {
  try {
    const { tweetId } = req.params;

    const tweetFound = await Tweet.findById(tweetId);

    if (!tweetFound) {
      throw new CustomError({ message: "Tweet Not Found" });
    }
    const hashTags = tweetFound.tweet
      .split(" ")
      .filter(ele => ele.startsWith("#"));
    return res.send({ message: "Hashtags Found", hashTags });
  } catch (err) {
    logger.error(err);
    let status = err.status ? err.status : 500;
    res.status(status).send({ message: err.message, done: false });
  }
};

module.exports = { createTweet, getHashTags };
