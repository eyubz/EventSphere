class AuthController {
  constructor(authService) {
    this.authService = authService;
  }
  SignupController = async (req, res) => {
    const { name, email, password, isOrganizer } = req.body;
    try {
      const message = await this.authService.SignUpService(
        name,
        email,
        password,
        isOrganizer
      );
      res.status(200).json({ message });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };

  VerifyController = async (req, res) => {
    const { email, otp } = req.body;
    try {
      const message = await this.authService.VerifyOTP(email, otp);
      res.status(200).json({ message });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };
}
module.exports = AuthController;
