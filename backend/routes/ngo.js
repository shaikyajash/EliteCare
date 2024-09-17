const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
    res.json({ msg: "Route is working", status: "T", data: null });
  });
  

module.exports = router;
