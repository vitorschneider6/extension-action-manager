const express = require("express");
const router = express.Router();
const controller = require("../controllers/course_coordinator-controller");
const authService = require("../services/auth-service");

router.post("/", authService.authorize, controller.post);

router.get("/", controller.get);

router.get("/:id", controller.getById);

router.put("/:id", authService.authorize, controller.put);

router.delete("/", authService.isAdmin, controller.delete);

module.exports = router;
