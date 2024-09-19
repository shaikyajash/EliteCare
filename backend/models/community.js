const mongoose = require("mongoose");

const CommunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  community: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Community", CommunitySchema);
