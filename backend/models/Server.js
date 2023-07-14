import express from "express";
import conectarDB from "../database/config.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.conectarDatabase();
    }

    async conectarDatabase() {
        await conectarDB();
    }
    
    middlewares(){
        this.app.use(express.json());
    }

    routes(traders){
        this.app.use(...traders);
/*         this.app.use(...tipoDinero);
        this.app.use(...dinero);
        this.app.use(...acciones); */
    }



    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}

export default Server;