const express = require("express");
const {
  generateChatCompletion,
  sendChatsToUser,
} = require("../controller/chat.js");
const { chatCompletionValidator, validate } = require("../utils/validator");
const { verifyToken } = require("../utils/tokenManager");
const router = express.Router();

router.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);
router.get("/get", verifyToken, sendChatsToUser);

module.exports = router;
