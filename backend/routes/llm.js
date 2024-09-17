const express = require("express");
const { handlePrompt } = require("../controller/chat");

const router = express.Router();


router.post("/", handlePrompt);
  

module.exports = router;
