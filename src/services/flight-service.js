const {AirplaneRepository,FlightRespository}= require('../respository/index');
const {compareTime}= require('../utils/helper');
class FlightService{

    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.flightrepository= new FlightRespository();
    }


    async createFlight(){
        try{
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw{error: 'Arrival time cannot be less than departure time'};
            }
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight= await this.flightrepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;
        }
        catch(error){
            console.log("something went woring at service layer");
            throw{error};
        }
    }

    async getFlightData(data){
        try{
            const flight= await this.flightrepository.getAllFlights(data);
            return flight;
        }
        catch(error){
                console.log("something went wrong at service layer");
                throw{error};
        }
    }


}
module.exports= FlightService;

/**
 * {
 * flightnumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats ->airplane
 * 
 * }
 */