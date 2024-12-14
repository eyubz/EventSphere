const express = require("express");

const router = express.Router();

const AuthController = require("../Controllers/auth_controller");
const AuthService = require("../Services/auth_service");
const AuthRepository = require("../Infrastructure/auth_repository");
const UserModel = require("../Models/user_model");
const VerificationService = require("../Services/verification_service");

const verificationService = new VerificationService();
const userRepository = new AuthRepository(UserModel);
const authService = new AuthService(userRepository, verificationService);
const authController = new AuthController(authService);

router.post("/signup", authController.SignupController);

module.exports = router;
