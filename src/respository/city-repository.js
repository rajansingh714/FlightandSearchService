const {City}= require('../models/index');

class CityRepsository{
    async createCity ({name}){
        try{
            const city = await City.create({name});
            return city;

        }
        catch(err){
            console.log("something went wrong in the repository layer");
            throw(err);
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
        }
        catch(err){
            console.log("something went wrong in the repository layer");
            throw(err);
        }
    }
    
    async updateCity(cityId,data){
        try{
            const city= await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        }
        catch(err){
            console.log("something went wrong in this repository");
            throw(err);
        }
    }


    async getCity(cityId){
        try{
            const city= await City.findByPk(cityId);
            return city;
        }
        catch(err){
            console.log("something went wrong in the repository layer");
            throw(err);
        }
    }

}

module.exports= CityRepsository;
