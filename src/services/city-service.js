const {CityRepository}= require('../respository/index');

class CityService{
    constructor(){
        this.cityRepository= new CityRepository();
    }

    async createCity(data){
        try{
            const city= await this.cityRepository.createCity(data);
            return city; 
        }
        catch(err){
            console.log("something went wrong on service layer");
            throw(err);
        }
    }

    async deleteCity(cityId){
        try{
            const response= await this.cityRepository.deleteCity(cityId);
            return response;
        }
        catch(err){
            console.log("something went wrong on service layer");
            throw(err);
        }
    }

    async updateCity(cityId,data){
        try{
            const city= await this.cityRepository.updateCity(cityId,data);
            return city;
        }
        catch(err){
            console.log("something went wrong in service layer");
            throw(err);
        }
    }

    async getCity(cityId){
        try{
            const city= await this.cityRepository.getCity(cityId);
            return city;
        }
        catch(err){
            console.log("something went wrong on service layer");
            throw(err);
        }
    }


}

module.exports= CityService;