const bcrypt = require("bcryptjs");
class password {
  constructor(password) {
    if (!password) {
      throw new Error("Password is required.");
    }
    // if (!this.ValidatePassword(password)) {
    //   throw new Error(
    //     "Password must contain at least 8 characters, including one letter, one number and one special character."
    //   );
    // }
    this.password = password;
  }
  ValidatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  }

  HashPassword() {
    return bcrypt.hash(this.password, 10);
  }

  ComparePassword(hashedPassword) {
    return bcrypt.compare(this.password, hashedPassword);
  }
}

module.exports = password;
