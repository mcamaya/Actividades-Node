import Trader from "../models/Traders.js";

const getTraders = async (req, res) => {
    const tradersDB = await Trader.find();
    res.json(tradersDB);
}

const getOneTrader = async (req, res) => {
    const oneTrader = await Trader.find({_id:req.params.id});
    res.json(oneTrader);
}

const postTraders = async (req, res) => {
    try {
        const trader = new Trader(req.body);
        const nuevo = trader.save();
        res.json(nuevo);
    } catch (err) {
        console.error(err);
    }
}

const deleteTraders = async (req, res) => {
    try {
        const eliminado = await Trader.deleteOne({_id:req.params.id});
        res.json(eliminado);
    } catch (err) {
        console.error(err);
    }
}

const updateTraders = async (req, res) => {
    try {
        const trader = await Trader.findOne({_id:req.params.id});
        if(req.body.nombre){
            trader.nombre = req.body.nombre;
        }
        if(req.body.edad){
            trader.edad = req.body.edad;
        }
        if(req.body.nacionalidad){
            trader.nacionalidad = req.body.nacionalidad;
        }
        if(req.body.presupuestoFiatUSD){
            trader.presupuestoFiatUSD = req.body.presupuestoFiatUSD;
        }

        await trader.save();
        res.json(trader);
    } catch (err) {
        console.error(err);
    }
}

export {
    getTraders,
    getOneTrader,
    postTraders,
    deleteTraders,
    updateTraders
}