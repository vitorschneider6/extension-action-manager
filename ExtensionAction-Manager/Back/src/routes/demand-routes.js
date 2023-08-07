const express = require("express");
const router = express.Router();
const controller = require("../controllers/demand-controller");
const authService = require("../services/auth-service");

router.get("/", authService.authorize, controller.get);

router.get("/:id", authService.authorize, controller.getById);

router.post("/", authService.authorize, controller.post);

router.put("/:id", authService.authorize, controller.put);

router.delete("/", authService.authorize, controller.delete);

module.exports = router;
