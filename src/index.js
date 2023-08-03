const express = require("express");
const bodyParser = require('body-parser');
const CityRepsository = require('./respository/city-repository');
require('dotenv').config();

const {PORT} = require('./config/ServerConfig');
const ApiRoutes = require('./routes/index');
const db= require('./model/index');
//const {Airport, City}= require('./models/index')
const setupServer= async ()=>{
const app = express();

app.use(bodyParser.json()); // currently these two middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',ApiRoutes) ;

const repo= new CityRepsository();
repo.createCity({name:"Bihar"});


app.listen(PORT, async()=>{
    console.log("server Started as ", PORT);
   // const airports= await Airport.findAll({
    //    include:[{
     //       model:City
    //  }]
   // });
    //console.log(airports);
    // const result = await City.findOne({
    //     where:{
    //         id:9
    //     },
    //     include:[
    //         {
    //             model:Airport
    //         }
    //     ]
    // });
    // const airports= await City.getAirport();
    // console.log(result,airports);//
    // const airports = await City.findAll({
    //     Where:{
    //         id:9
    //     },
    //     include:[
    //     {
    //         model:Airport
    //     }
    // ]
    // });
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
    }
    // console.log(airports);
});

};

setupServer();
