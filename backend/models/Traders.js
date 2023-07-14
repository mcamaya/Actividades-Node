import mongoose from "mongoose";

const traderSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    edad: {
        type: Number,
        trim: true,
        required: true
    },
    nacionalidad: {
        type: String,
        trim: true,
        required: true
    },
    presupuestoFiatUSD: {
        type: Number,
        trim: true,
        required: true
    }
},
{
    timestamps: true
})

const Trader = mongoose.model("trader", traderSchema);
export default Trader;