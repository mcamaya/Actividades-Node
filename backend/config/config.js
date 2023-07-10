import mongoose from "mongoose";

const dbCnx = async () => {
    try {
        const conectar = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `Conectado a MongoDB desde el servidor ${conectar.connection.host} en el puerto ${conectar.connection.port}`
        console.log(url);

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default dbCnx;