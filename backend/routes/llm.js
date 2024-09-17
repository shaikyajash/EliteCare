const express = require("express");
const { handlePrompt } = require("../controller/chat");

const router = express.Router();


router.get("/", handlePrompt);
  

module.exports = router;
