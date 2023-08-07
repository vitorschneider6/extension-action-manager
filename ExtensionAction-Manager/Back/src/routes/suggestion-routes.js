const express = require("express");
const router = express.Router();
const controller = require("../controllers/suggestion-controler");
const authService = require("../services/auth-service");

router.get("/", authService.authorize, controller.get);

router.get("/user/:id", authService.authorize, controller.getByUser);

router.get("/all", authService.authorize, controller.getAll);

router.post("/", controller.post);

router.put("/:id", authService.authorize, controller.put);

router.delete("/", authService.authorize, controller.delete);

module.exports = router;
