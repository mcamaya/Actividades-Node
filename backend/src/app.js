import express from "express";
import constructorasRoutes from "./routes/constructoras.routes.js";
import categoriasRoutes from "./routes/categorias.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import cotizacionesRoutes from "./routes/cotizaciones.routes.js";

const app = express();

app.set("port", 3306);

// Routes
app.use("/api/constructoras", constructorasRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/cotizaciones", cotizacionesRoutes);

export default app;