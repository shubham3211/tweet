var mongoose = require("mongoose");
const { dbConn } = require("../../utils/dbConnections");

const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = dbConn.model("Tweets", tweetSchema);
