const express = require("express");

const router = express.Router();

const AuthController = require("../Controllers/auth_controller");
const authService = require("../Services/auth_service");

const authService = new AuthService();
const authController = new AuthController(authService);

router.post("/signup", authController.SignupController);

module.exports = router;
