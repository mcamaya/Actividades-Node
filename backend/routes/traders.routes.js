import obj from "../controllers/traders.controllers.js";
import express from "express";

let {getTraders} = obj;
const router = express.Router();

router.get("/", getTraders);
/* router.get("/:id", getOneTrader);
router.post("/", postTraders);
router.delete("/:id", deleteTraders);
router.patch("/:id", updateTraders); */

export default router;