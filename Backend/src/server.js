const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./Config/db");

require("dotenv").config();
const PORT = process.env.PORT;

const auth_route = require("./Routes/auth_route");
const refresh_route = require("./Routes/refresh_route");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/auth", auth_route);
app.use("/api/v1/refresh", refresh_route);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
