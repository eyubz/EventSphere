class AuthController {
  constructor(authService) {
    this.authService = authService;
  }
  SignupController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const message = await this.authService.SignUpService(
        name,
        email,
        password
      );
      res.status(200).json({ message });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}
module.exports = AuthController;
