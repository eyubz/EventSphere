const route = require("express").Router();
const upload = require("../Middleware/fileMiddleware");

const UserRepository = require("../Infrastructure/user_repository");
const UserController = require("../Controllers/user_controller");
const UserService = require("../Services/user_service");
const userModel = require("../Models/user_model");

const userRepository = new UserRepository(userModel);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

route.get("/profile", userController.GetUserProfile);
route.put("/profile", upload.single("image"), userController.UpdateUserProfile);

module.exports = route;
