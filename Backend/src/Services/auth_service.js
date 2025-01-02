const User = require("../Domain/Entity/user");

class AuthService {
  constructor(authRepository, verificationService, emailService, tokenService) {
    this.authRepository = authRepository;
    this.verificationService = verificationService;
    this.emailService = emailService;
    this.tokenService = tokenService;
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
    console.log(email, otp);
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

  LoginService = async (email, password) => {
    if (!email || !password) {
      throw new Error("Please fill all the fields");
    }
    try {
      const user = await this.authRepository.FindUserByEmail(email);
      if (!user) {
        throw new Error("User not found. Please signup");
      }

      const existingUser = new User(
        user.name,
        user.email,
        user.password,
        user.isOrganizer
      );
      if (!existingUser.password.ComparePassword(password)) {
        throw new Error("Invalid email or password");
      }
      if (!user.isVerified) {
        throw new Error("Please verify your email");
      }
      const accessToken = this.tokenService.GenerateAccessToken({
        id: user._id,
      });

      const refreshToken = this.tokenService.GenerateRefreshToken({
        email: user._id,
      });
      return { accessToken, refreshToken, isOrganizer: user.isOrganizer };
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AuthService;
