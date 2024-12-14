class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  FindUserByEMail = async (email) => {
    try {
      const user = await this.userModel.findOne({ email });
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserRepository;
