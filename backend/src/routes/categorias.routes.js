import { Router } from "express";
import { methodsHTTP as categoriasController } from "../controllers/categorias.controllers.js";

const router = Router();

router.get("/", categoriasController.getCategorias);

export default router;