const { Router, response, json } = require("express");


const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UsersValidatedController = require("../controllers/UsersValidatedController")

const usersRoutes = Router();

const usersController = new UsersController();
const usersValidatedController = new UsersValidatedController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.get("/validated", ensureAuthenticated, usersValidatedController.index);


module.exports = usersRoutes;
