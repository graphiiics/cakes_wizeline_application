const Cake = require('../models/cakeSchema');

class CakesService{

    async getCakes(){
        const cakes = await Cake.find();
        return cakes || [];
    }

    async getCake({cakeId}){
        const cakeById = await Cake.findById(cakeId);
        return cakeById || [];
    }

    createCake({ cake }) {
        const createCake = new Cake( cake );
        return createCake.save();
    }

    async updateCake({ cakeId, cake }){

        const foundCake = await Cake.findOne({
            _id: cakeId
        });
    
        foundCake.name = cake.name || foundCake.name;
        foundCake.price = cake.price || foundCake.price;
        foundCake.flavors = cake.flavors || foundCake.flavors;
    
        const cakeUpdated = await foundCake.save();
        return cakeUpdated;
    
    }

    deleteCake({cakeId}){
        return Cake.deleteOne({
            _id : cakeId
        });
    }
}

module.exports = CakesService;
