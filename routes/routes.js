import { Router } from "express";
import countryRoutes from "./countryRoute.js";

const router = Router();
router.get("/", (req, res) => {
  res.json({
    message: "incorrect end point look up the documentation here: 'deez' ",
  });
});
router.use("/countries", countryRoutes);

export default router;
