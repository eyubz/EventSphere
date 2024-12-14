class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }

  FindUserByEmail = async (email) => {
    try {
      const user = await this.userModel.findOne({ email });
      return user;
    } catch (error) {
      throw error;
    }
  };

  DeleteUser = async (email) => {
    try {
      await this.userModel.delete({ email });
    } catch (error) {
      throw error;
    }
  };

  SignUp = async (user) => {
    try {
      const newUser = new this.userModel(user);
      await newUser.save();
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserRepository;
