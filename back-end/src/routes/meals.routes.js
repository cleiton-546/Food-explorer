const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../config/upload");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization")

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const MealsController = require("../controllers/MealsController");

const mealsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const mealsController = new MealsController();

mealsRoutes.use(ensureAuthenticated)


mealsRoutes.post("/", verifyUserAuthorization("admin"), upload.single('img'), mealsController.create, );
mealsRoutes.get("/:id", mealsController.show);
mealsRoutes.delete("/:id",verifyUserAuthorization("admin"), mealsController.delete);
mealsRoutes.get("/", mealsController.index); 
mealsRoutes.put( "/:id",verifyUserAuthorization("admin"),upload.single("img"),mealsController.update);



module.exports = mealsRoutes;
