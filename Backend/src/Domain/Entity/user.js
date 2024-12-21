const Email = require("../Value-Objects/email");
const Password = require("../Value-Objects/password");

class User {
  constructor(name, email, password, isOrganizer) {
    this.name = name;
    this.email = new Email(email);
    this.password = new Password(password);
    this.isOrganizer = isOrganizer;
  }
}

module.exports = User;
