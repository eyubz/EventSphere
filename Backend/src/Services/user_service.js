class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  GetUserProfile = async (userId) => {
    if (!userId || !user) {
      throw new Error("user Id required");
    }
    try {
      const user = await this.userRepository.GetUserProfile(userId);
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
