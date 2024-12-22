const express = require("express");

const router = express.Router();

const AuthController = require("../Controllers/auth_controller");
const AuthService = require("../Services/auth_service");
const AuthRepository = require("../Infrastructure/auth_repository");
const UserModel = require("../Models/user_model");
const VerificationService = require("../Services/verification_service");
const EmailService = require("../Services/email_service");
const TokenService = require("../Services/token_service");

const emailService = new EmailService();
const verificationService = new VerificationService();
const userRepository = new AuthRepository(UserModel);
const tokenService = new TokenService();
const authService = new AuthService(
  userRepository,
  verificationService,
  emailService,
  tokenService
);
const authController = new AuthController(authService);

router.post("/signup", authController.SignupController);
router.post("/verify", authController.VerifyController);
router.post("/login", authController.LoginController);

module.exports = router;
