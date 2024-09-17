const express = require("express");
const { generateChatCompletion, sendChatsToUser } = require("../controller/chat.js");
const { chatCompletionValidator, validate } = require("../utils/validator");
const { verifyToken } = require("../utils/tokenManager");
const router = express.Router();

// Create a new user
router.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
chatRoutes.get("/all-chats", verifyToken, sendChatsToUser);


module.exports = router;
