const express = require("express");
const { validate, postValidator } = require("../utils/validator");
const { handlePost, handleGetGroups, handleGetPost } = require("../controller/community");

const router = express.Router();


router.post("/create", validate(postValidator), handlePost);
router.get("/startsWith/:letter",handleGetGroups);
router.get("/post/:groupName", handleGetPost);
  

module.exports = router;
