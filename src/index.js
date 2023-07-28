const express = require('express');
const {PORT}= require('./config/ServerConfig');
const bodyParser = require('body-parser');

const setupServer= async ()=>{
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.listen(PORT, ()=>{
    console.log(`server Started as ${PORT}`);
})
};

setupServer();

