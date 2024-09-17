const express = require("express");
const { handleBlog, getBlog } = require("../controller/blog");
const { blogValidator, validate } = require("../utils/validator");
const { verifyToken } = require("../utils/tokenManager");

const router = express.Router();

// api/blog/write
router.post("/write", validate(blogValidator), verifyToken, handleBlog);
router.get("/get", getBlog);

module.exports = router;
