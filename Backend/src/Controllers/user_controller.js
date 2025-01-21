class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  GetUserProfile = async (req, res) => {
    const userId = req.id;
    try {
      const user = await this.userService.GetUserProfile(userId);
      console.log(user);
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

  UploadImage = async (req, res) => {
    const userId = req.id;
    const event = req.body;
    const file = req.file;
    try {
      const message = await this.userService.UploadImage(userId, event, file);
      res.status(200).json({ message });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  GetEvents = async (req, res) => {
    const userId = req.id;
    try {
      const events = await this.userService.GetEvents(userId);
      res.status(200).json({ events });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = UserController;
