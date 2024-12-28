const route = require("express").Router();
const RefreshController = require("../Controllers/refresh_controller");
const TokenService = require("../Services/token_service");

const tokenService = new TokenService();
const refreshController = new RefreshController(tokenService);

route.post("/", refreshController.RefreshController);

module.exports = route;
