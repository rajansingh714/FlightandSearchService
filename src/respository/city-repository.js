const {City}= require('../models/index');

class CityRepsository{
    async createCity ({name}){
        try{
            const city = await City.create({name});
            return city;

        }
        catch(err){
            throw(err);
        }
    }

    async deleteCity(cityid){
        try{
            await City.destroy({
                where:{
                    id:cityid
                }
            });
        }
        catch(err){
            throw(err);
        }
    }

}

module.exports= CityRepsository;