class Email {
  constructor(email) {
    if (!email) {
      throw new Error("Email is required");
    }
    if (!this.ValidateEmail(email)) {
      throw new Error("Invalid email");
    }
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  ValidateEmail(email) {
    console.log(email);
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
}

module.exports = Email;
