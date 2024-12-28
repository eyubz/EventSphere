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

  VerifyJwtToken = (token) => {
    try {
      const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
      return decoded;
    } catch (error) {
      return { error: "Invalid or expired token", details: error.message };
    }
  };

  RefreshToken(refreshToken) {
    if (!refreshToken) {
      throw new Error("Refresh Token is required");
    }
    try {
      const decoded = this.VerifyJwtToken(token);
      const accessToken = this.GenerateAccessToken(decoded.id);
      return accessToken;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TokenService;
