const express = require('express');
const {PORT}= require('./config/ServerConfig');

const setupServer= async ()=>{
const app = express();

app.listen(PORT, ()=>{
    console.log(`server Started as ${PORT}`);
})
};

setupServer();

