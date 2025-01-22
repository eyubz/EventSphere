const route = require("express").Router();
const upload = require("../Middleware/fileMiddleware");

const UserRepository = require("../Infrastructure/user_repository");
const UserController = require("../Controllers/user_controller");
const UserService = require("../Services/user_service");
const userModel = require("../Models/user_model");
const eventModel = require("../Models/event_model");
const EventRepository = require("../Infrastructure/event_repository");
const AuthMiddleWare = require("../Middleware/authMiddleware");
const eventRepository = new EventRepository(eventModel);
const userRepository = new UserRepository(userModel);
const userService = new UserService(userRepository, eventRepository);
const userController = new UserController(userService);

route.post(
  "",
  upload.single("image"),
  AuthMiddleWare,
  userController.UploadEvent
);
route.get("", AuthMiddleWare, userController.GetEvents);
route.get("/all", userController.GetAllEvents);
route.get("/rsvp/:id", AuthMiddleWare, userController.RsvpEvent);

module.exports = route;
