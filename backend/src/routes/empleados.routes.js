import { Router } from "express";
import { methodsHTTP as empleadosController } from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", empleadosController.getEmpleados);

export default router;