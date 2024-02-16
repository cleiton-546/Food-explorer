const { Router } = require("express");


const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const mealsRouter = require("./meals.routes");
const ingredientsRouter = require("./ingredients.routes");


const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/meals", mealsRouter);
routes.use("/ingredients", ingredientsRouter);

module.exports = routes;
