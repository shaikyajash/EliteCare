const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: new Date().toISOString,
  },
  query: {
    type: String,
    required: [true, "Role is required"],
  },
  response: {
    type: String,
    required: [true, "Content is required"],
  },
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [ChatSchema],
});

module.exports = mongoose.model("User", UserSchema);
