const express = require("express");
const router = express.Router();
const controller = require("../controllers/course-controller");
const authService = require("../services/auth-service");

router.get("/", authService.authorize, controller.get);

router.get("/:slug", authService.authorize, controller.getBySlug);

router.get("/admin/all", authService.isAdmin, controller.getAll);

router.post("/", authService.isAdmin, controller.post);

router.put("/:id", authService.isAdmin, controller.put);

router.delete("/", authService.isAdmin, controller.delete);

module.exports = router;
