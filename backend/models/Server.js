import express from "express";
import conectarDB from "../database/config.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.mongoURI = process.env.MONGO_URI
        this.middlewares();
        this.conectarDatabase();
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(tipoDinero, dinero, acciones, traders){
        this.app.use(...tipoDinero);
        this.app.use(...dinero);
        this.app.use(...acciones);
        this.app.use(...traders);
    }

    async conectarDatabase() {
        await conectarDB();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }


}

export default Server;