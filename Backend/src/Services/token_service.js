const jwt = require("jsonwebtoken");

class TokenService {
  constructor() {}

  GenerateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });
  };

  GenerateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    });
  };
}

module.exports = TokenService;
