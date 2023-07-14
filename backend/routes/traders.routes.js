import { getTraders, getOneTrader, postTraders, deleteTraders, updateTraders } from "../controllers/traders.controllers.js";
import express from "express";

const router = express.Router();

router.get("/", getTraders);
router.get("/:id", getOneTrader);
router.post("/", postTraders);
router.delete("/:id", deleteTraders);
router.patch("/:id", updateTraders);

export default router;