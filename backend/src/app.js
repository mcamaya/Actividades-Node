import express from "express";
import constructorasRoutes from "./routes/constructoras.routes.js";

const app = express();

app.set("port", 5000);

// Routes
app.use("/api/constructoras", constructorasRoutes);

export default app;