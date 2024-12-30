class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

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
}

module.exports = UserRepository;
