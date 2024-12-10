const Email = require("../ValueObject/email");
const Password = require("../ValueObject/password");

class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = new Email(email);
    this.password = new Password(password);
  }
}

module.exports = User;
