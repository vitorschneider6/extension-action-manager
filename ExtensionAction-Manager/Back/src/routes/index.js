const express = require("express");
const router = express.Router();

const route = router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "PROG3 - API",
    version: "1.2.0",
  });
});

module.exports = router;
