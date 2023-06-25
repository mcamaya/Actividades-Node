import { Router } from "express";
import { methodsHTTP as productosController } from "../controllers/productos.controllers.js";

const router = Router();

router.get("/", productosController.getProductos);

export default router;