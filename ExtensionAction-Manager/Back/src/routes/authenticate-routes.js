const express = require("express");
const router = express.Router();
const controller = require("../controllers/user-controller");
const authService = require("../services/auth-service");

router.post('/', controller.authenticate);

module.exports = router;