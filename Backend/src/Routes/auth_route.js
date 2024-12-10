const express = require("express");

const router = express.Router();
const AuthController = require("../Controllers/auth_controller");

const authController = new AuthController();

router.post("/signup", authController.SignupController);

module.exports = router;
