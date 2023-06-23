import { Router } from "express";
import { methodsHTTP as constructorasController } from "../controllers/constructoras.controllers.js";

const router = Router();

router.get("/", constructorasController.getConstructoras);

export default router;