const User = require("../Domain/Entity/user");

class AuthService {
  constructor(authRepository, verificationService, emailService) {
    this.authRepository = authRepository;
    this.verificationService = verificationService;
    this.emailService = emailService;
  }

  SignUpService = async (name, email, password, isOrganizer) => {
    try {
      if (!name || !email || !password) {
        throw new Error("Please fill all the fields");
      }
      const newUser = new User(name, email, password, isOrganizer);
      const existingUser = await this.authRepository.FindUserByEmail(email);
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
        isOrganizer,
        otp,
      });
      return "User created successfully. Please verify your email";
    } catch (error) {
      throw error;
    }
  };
  VerifyOTP = async (email, otp) => {
    if (!email || !otp) {
      throw new Error("Please fill all the fields");
    }
    const user = await this.authRepository.FindUserByEmail(email);
    if (!user) {
      throw new Error("User not found. Please signup");
    }
    if (user.isVerified) {
      throw new Error("User already verified. Please login");
    }
    if (user.otp !== otp) {
      console.log(user, otp);
      throw new Error("Invalid OTP");
    }
    if (this.verificationService.VerifyOTP(otp)) {
      await this.authRepository.VerifyUser(email);
      return "Email verified successfully. Please login";
    }
    throw new Error("Invalid OTP. OTP expired");
  };
}

module.exports = AuthService;
