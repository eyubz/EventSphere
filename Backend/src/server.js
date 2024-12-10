const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT;

const auth_route = require("./Routes/auth_route");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(auth_route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
