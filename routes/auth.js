const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controller/user");
const {
  loginValidator,
  signupValidator,
  validate,
} = require("../utils/validator");
const router = express.Router();

// Create a new user
router.post("/signup", validate(signupValidator), handleUserSignup);
router.post("/login", validate(loginValidator), handleUserLogin);


module.exports = router;
