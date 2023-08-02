const express = require("express");
const bodyParser = require('body-parser');
const CityRepsository = require('./respository/city-repository');
require('dotenv').config();

const {PORT} = require('./config/ServerConfig');
const ApiRoutes = require('./routes/index');


const setupServer= async ()=>{
const app = express();

app.use(bodyParser.json()); // currently these two middleware
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',ApiRoutes) ;

const repo= new CityRepsository();
repo.createCity({name:"Bihar"});


app.listen(PORT, async()=>{
    console.log("server Started as ", PORT);
})

};

setupServer();
