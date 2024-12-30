const Email = require("../Value-Objects/email");
const Password = require("../Value-Objects/password");

class User {
  constructor(name, email, password, isOrganizer, title, bio, location, image) {
    this.name = name;
    this.email = new Email(email);
    this.password = new Password(password);
    this.isOrganizer = isOrganizer;
    this.title = title;
    this.bio = bio;
    this.location = location;
    this.image = image;
  }
}

module.exports = User;
