import User from "../Domain/Entity/user";

class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  SignUpService = async (name, email, password) => {
    try {
      if (!name || !email || !password) {
        throw new Error("Please fill all the fields");
      }

      const newUser = new User(name, email, password);

      const user = await this.authRepository.SignUpRepository(
        name,
        email,
        password
      );
      return user;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = AuthService;
