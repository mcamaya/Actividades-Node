import Server from "./models/Server.js";
import dotenv from "dotenv";
import tradersRouter from "./routes/traders.routes.js";

dotenv.config();
const server = new Server();

// rutas
const tradersRoutes = ["/traders", tradersRouter];

server.listen();
server.routes(tradersRoutes);