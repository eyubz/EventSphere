class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  GetUserProfile = async (req, res) => {
    const userId = req.id;
    try {
      const user = await this.userService.GetUserProfile(userId);
      console.log("The User", user);
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
      console.log("Events", events);
      res.status(200).json({ events });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  UploadEvent = async (req, res) => {
    const userId = req.id;
    const event = req.body;
    const file = req.file;
    console.log("Body", req.body);
    try {
      const message = await this.userService.UploadEvent(userId, event, file);
      res.status(200).json({ message });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };

  GetAllEvents = async (req, res) => {
    try {
      const events = await this.userService.GetAllEvents();
      res.status(200).json({ events });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };

  RsvpEvent = async (req, res) => {
    try {
      const id = req.params.id;
      const userId = req.id;
      const events = await this.userService.RsvpEvent(userId, id);
      res.status(200).json({ events });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };

  SaveEvent = async (req, res) => {
    try {
      const id = req.params.id;
      const userId = req.id;
      const events = await this.userService.SavedEvent(userId, id);
      res.status(200).json({ events });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };
}

module.exports = UserController;
