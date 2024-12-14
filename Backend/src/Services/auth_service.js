import User from "../Domain/Entity/user";

class AuthService {
  constructor(authRepository, verificationService) {
    this.authRepository = authRepository;
    this.verificationService = verificationService;
  }

  SignUpService = async (name, email, password) => {
    try {
      if (!name || !email || !password) {
        throw new Error("Please fill all the fields");
      }
      const newUser = new User(name, email, password);

      const existingUser = await this.authRepository.FindUserByEmail({ email });
      if (existingUser) {
        if (existingUser.isVerified) {
          throw new Error("User already exists. Please Login");
        }
        throw new Error("User already exists. Please verify your email");
      }
      const hashedPassword = await newUser.password.HashPassword();
      newUser.password = hashedPassword;

      const otp = this.verificationService.GenerateOTP();
      newUser.otp = otp;

      // we need to send an email to the user with the OTP

      const user = await this.authRepository.SignUpRepository(
        name,
        email,
        password
      );
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AuthService;
