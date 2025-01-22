class UserService {
  constructor(userRepository, eventRepository) {
    this.userRepository = userRepository;
    this.eventRepository = eventRepository;
  }

  GetUserProfile = async (userId) => {
    if (!userId) {
      throw new Error("user Id required");
    }
    try {
      const user = await this.userRepository.GetUserProfile(userId);
      return user;
    } catch (error) {
      throw error;
    }
  };

  UpdateUserProfile = async (userId, updatedUser, file) => {
    if (!userId || !updatedUser) {
      throw new Error("user id required");
    }
    const { name, title, bio, location } = updatedUser;
    console.log(updatedUser);
    try {
      const user = await this.userRepository.FindUserById(userId);
      const imgUrl = file ? `/uploads/${req.file.filename}` : user.image;
      user.image = imgUrl;
      user.name = name || user.name;
      user.title = title || user.title;
      user.bio = bio || user.bio;
      user.location = location || user.location;
      console.log("user", user);
      const updateUser = await this.userRepository.UpdateUser(user);
      return updateUser;
    } catch (error) {
      console.log("Error, service", error);
      throw error;
    }
  };

  UploadImage = async (userId, event, file) => {
    if (!userId || !event) {
      throw new Error("user id and event required");
    }
    try {
      const imgUrl = file
        ? `/uploads/${req.file.filename}`
        : "https://via.placeholder.com/150";
      event.image = imgUrl;

      const insertedEvent = this.eventRepository.InsertEvent(event);
      const user = await this.userRepository.UpdateUserEvents(
        userId,
        insertedEvent._id
      );
      return "Event created successfully";
    } catch (error) {
      throw error;
    }
  };

  GetEvents = async (userId) => {
    if (!userId) {
      throw new Error("user id required");
    }
    try {
      const user = await this.userRepository.FindUserById(userId);
      const events = await this.eventRepository.GetEvents(user.events);
      return events;
    } catch (error) {
      throw error;
    }
  };

  UploadEvent = async (userId, event, file) => {
    if (!userId || !event) {
      throw new Error("user id and event required");
    }
    try {
      const imgUrl = file
        ? `/uploads/${req.file.filename}`
        : "https://via.placeholder.com/150";
      event.image = imgUrl;

      const insertedEvent = await this.eventRepository.UploadEvent(event);

      const user = await this.userRepository.UpdateUserEvents(
        userId,
        insertedEvent._id
      );
      return "Event created success fully";
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
