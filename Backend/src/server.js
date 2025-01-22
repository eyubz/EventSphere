const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./Config/db");

require("dotenv").config();
const PORT = process.env.PORT;

const AuthMiddleWare = require("./Middleware/authMiddleware");

const auth_route = require("./Routes/auth_route");
const refresh_route = require("./Routes/refresh_route");
const user_route = require("./Routes/user_route");
const event_route = require("./Routes/event_route");

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log("CORS applied to:", req.method, req.path);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1/auth", (req, res, next) => {
  res.send("Hi elsa");
  next();
});

app.use(bodyParser.json());
app.use("/api/v1/auth", auth_route);
app.use("/api/v1/refresh", refresh_route);
app.use("/api/v1/user", AuthMiddleWare, user_route);
app.use("/api/v1/events", event_route);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
