class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
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
      throw new "user id required"();
    }
    const { name, title, bio, location } = updatedUser;
    try {
      const user = await this.userRepository.FindUserById(userId);
      const imgUrl = file ? `/uploads/${req.file.filename}` : user.image;
      user.image = imgUrl;
      user.name = name || user.name;
      user.title = title || user.title;
      user.bio = bio || user.bio;
      user.location = location || user.location;
      const updateUser = await this.userRepository.UpdateUser(user);
      return updateUser;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
