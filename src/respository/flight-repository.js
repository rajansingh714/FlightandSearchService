const {Flights}= require('../models/index');
const {Op}= require('sequelize');

class FlightRepository{
    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId= data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId= data.departureAirportId;
        }
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter,{
        //         [Op.end]:[
        //             {price:{[Op.lte]:data.maxPrice}},
        //             {price:{[Op.gte]:data.minPrice}}
        //         ]
        //     });
        // }
       // let pricefilter=[];
        if(data.minPrice){
            //Object.assign(filter, {price:{[Op.gte]:data.minPrice}});
            pricefilter.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            Object.assign(filter, {price:{[Op.lte]:data.maxPrice}});
            pricefilter.push({price:{[Op.gte]:data.maxPrice}});
        }
        //Object.assign(filter,{[Op.end]:pricefilter});
        //Object.assign(filter,{[Op.and]:[{price:{[Op.lte]:7000} },{price:{[Op.gte]:4000}}]})
        //console.log(pricefilter, filter);
        return  filter;
    }

    async createFlight(data){
        try{
            const flight= await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("Something went wrong the repository layer");
            throw{error};
        }
    }

    async getFlight(flightId){
        try{
            const flight= await Flights.findByPk(flightId);
            return flight;
        }
        catch(error){
            console.log("Something went wrong the repository layer");
            throw{error};
        }
    }

    async getAllFlights(filter){
        try{
            const filterObject= this.#createFilter(filter);
            const flight= await Flights.findAll();
            return flight;
        }
        catch(error){
            console.log("Something went wrong the repository layer");
            throw{error};
        }
    }


}

module.exports= FlightRepository;

/*
    {
        where:{
            arrivalAirport: 2,
            departureAirported: 4,
            price: {[Op.gte]:4000}
        }
    }
*/