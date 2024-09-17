const express = require("express");
const { validate, postValidator } = require("../utils/validator");
const { handlePost } = require("../controller/community");

const router = express.Router();


router.post("/create", validate(postValidator), handlePost);
  

module.exports = router;
