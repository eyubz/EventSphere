class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  GetUserProfile = async (req, res) => {
    const userId = req.id;
    try {
      const user = await this.userService.GetUserProfile(userId);
      res.status(200).json({ user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  UpdateUserProfile = async (req, res) => {
    const userId = req.id;
    const user = req.body;
    const file = req.file;
    try {
      const message = await this.userService.UpdateUserProfile(
        userId,
        user,
        file
      );
      res.status(200).json({ message });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = UserController;
