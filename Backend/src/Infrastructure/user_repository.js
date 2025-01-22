class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }
  FindUserById = async (userId) => {
    try {
      const user = await this.userModel.findOne({ _id: userId });
      return user;
    } catch (error) {
      throw error;
    }
  };

  GetUserProfile = async (userId) => {
    try {
      const user = await this.userModel.findOne({ _id: userId });
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        title: user.title,
        bio: user.bio,
        location: user.location,
        image: user.image,
      };
    } catch (error) {
      throw error;
    }
  };

  UpdateUser = async (user) => {
    try {
      await user.save();
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        title: user.title,
        bio: user.bio,
        location: user.location,
        image: user,
      };
    } catch (error) {
      throw error;
    }
  };

  UpdateUserEvents = async (userId, eventId) => {
    try {
      const user = await this.userModel.findOne({ _id: userId });
      user.events.push(eventId);
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserRepository;
