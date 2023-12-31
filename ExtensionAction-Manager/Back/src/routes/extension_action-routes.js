const express = require("express");
const router = express.Router();
const controller = require("../controllers/extension_action-controller");
const authService = require("../services/auth-service");

router.get("/", controller.get);

router.get("/:id", controller.getByUser);

router.get("/admin/all", authService.authorize, controller.getAll);

router.get("/user/id/:id", controller.getById);

router.post("/", authService.authorize, controller.post);

router.put("/:id", authService.authorize, controller.put);

router.delete("/", authService.authorize, controller.delete);

module.exports = router;
