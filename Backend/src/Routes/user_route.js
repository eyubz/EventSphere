const route = require("express").Router();
const upload = require("../Middleware/fileMiddleware");

const UserRepository = require("../Infrastructure/user_repository");
const UserController = require("../Controllers/user_controller");
const UserService = require("../Services/user_service");
const userModel = require("../Models/user_model");
const eventModel = require("../Models/event_model");
const EventRepository = require("../Infrastructure/event_repository");

const eventRepository = new EventRepository(eventModel);
const userRepository = new UserRepository(userModel);

const userService = new UserService(userRepository, eventRepository);
const userController = new UserController(userService);

route.get("/profile", userController.GetUserProfile);
route.post(
  "/profile",
  upload.single("image"),
  userController.UpdateUserProfile
);
route.post("/event", upload.single("image"), userController.UploadImage);

module.exports = route;
