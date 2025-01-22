const jwt = require("jsonwebtoken");

const AuthenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const [bearer, token] = authHeader && authHeader.split(" ");

  if (bearer.toLowerCase() !== "bearer") {
    return res
      .status(401)
      .json({ message: "Bearer token is missing or invalid" });
  }

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access token is missing or invalid" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.id = decoded.id;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = AuthenticationMiddleware;
