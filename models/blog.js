const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  Title: {
    type: String,
    require: true,
  },
  Content: {
    type: String,
    require: true,
  },
  Date: {
    type: String,
    require: true,
  },
  Author: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Contact: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Blog", BlogSchema);
