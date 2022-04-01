import { Router } from "express";
import * as controllers from "../controllers/controller.js";

const router = Router();

router.get("/all", controllers.getAllCountries);
router.get("/findByID/:id", controllers.findByID);
router.get("/findByName/:name", controllers.findByName);
router.post("/", controllers.createCountry);
router.patch("/:id", controllers.updateCountry);
router.delete("/:id", controllers.deleteCountry);

export default router;
