const User = require("../Domain/Entity/user");

class AuthService {
  constructor(authRepository, verificationService, emailService) {
    this.authRepository = authRepository;
    this.verificationService = verificationService;
    this.emailService = emailService;
  }

  SignUpService = async (name, email, password) => {
    try {
      if (!name || !email || !password) {
        throw new Error("Please fill all the fields");
      }
      const newUser = new User(name, email, password);
      const existingUser = await this.authRepository.FindUserByEmail(email);
      console.log("The existing user", existingUser);
      if (existingUser) {
        if (existingUser.isVerified) {
          throw new Error("User already exists. Please Login");
        }
        throw new Error("User already exists. Please verify your email");
      }
      const hashedPassword = await newUser.password.HashPassword();
      const otp = await this.verificationService.GenerateOTP();
      this.emailService.SendVerificationEmail(email, otp);
      await this.authRepository.SignUp({
        name,
        email,
        password: hashedPassword,
        otp,
      });
      return "User created successfully. Please verify your email";
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AuthService;
