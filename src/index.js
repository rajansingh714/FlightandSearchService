const express = require("express");
const bodyParser = require('body-parser');
require('dotenv').config();

const {PORT} = require('./config/ServerConfig');


const setupServer= async ()=>{
const app = express();

app.use(bodyParser.json()); // currently these two middleware
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, ()=>{
    console.log("server Started as ", PORT);
})

};

setupServer();

