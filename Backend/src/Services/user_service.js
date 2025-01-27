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
      const imgUrl = "/uploads/event1.jpg";
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

  GetAllEvents = async () => {
    try {
      const events = await this.eventRepository.GetAllEvents();
      return events;
    } catch (error) {
      throw error;
    }
  };

  RsvpEvent = async (userId, id) => {
    if (!userId || !id) {
      throw new Error("user id and event required");
    }
    try {
      const insertedEvent = await this.eventRepository.RsvpEvent(id);

      const user = await this.userRepository.UpdateUserEvents(userId, id);
      return "Event responded successfully.";
    } catch (error) {
      throw error;
    }
  };

  SavedEvent = async (userId, id) => {
    if (!userId || !id) {
      throw new Error("user id and event required");
    }
    try {
      const insertedEvent = await this.eventRepository.SavedEvent(id);

      const user = await this.userRepository.UpdateSavedEvents(userId, id);
      return "Event responded successfully.";
    } catch (error) {
      throw error;
    }
  };

  GetRsvpEvent = async (userId) => {
    if (!userId) {
      throw new Error("user id required");
    }
    try {
      const user = await this.userRepository.FindUserById(userId);
      const events = await this.eventRepository.GetRsvpEvents(user.events);
      return events;
    } catch (error) {
      throw error;
    }
  };
  GetSavedEvent = async (userId) => {
    if (!userId) {
      throw new Error("user id required");
    }
    try {
      const user = await this.userRepository.FindUserById(userId);
      const events = await this.eventRepository.GetSavedEvents(user.saved);
      return events;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
