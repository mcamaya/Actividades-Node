class httpRequests {
    constructor(Model){
        this.model = Model;
        console.log(this.model);
    }

    async obtainAll(req, res) {
        const infoDB = await this.model.find();
        res.json(infoDB);
    }

    async obtainOne(req, res) {
        const oneData = await this.model.find({_id:req.params.id});
        res.json(oneData);
    }

    async insertData(req, res) {
        try {
            const registro = new this.model(req.body);
            const nuevo = registro.save();
            res.json(nuevo);
        } catch (err) {
            console.error(err);
        }
    }

    async deleteData(req, res) {
        try {
            const eliminado = await this.model.deleteOne({_id:req.params.id});
            res.json(eliminado);
        } catch (err) {
            console.error(err);
        }
    }


}

export default httpRequests;