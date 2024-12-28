class RefreshController {
  constructor(tokenService) {
    this.tokenService = tokenService;
  }

  RefreshController(req, res) {
    const { refreshToken } = req.body;

    try {
      console.log(this.tokenService);
      const { accessToken } = this.tokenService.RefreshToken(refreshToken);
      res.status(200).json({ accessToken });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = RefreshController;
