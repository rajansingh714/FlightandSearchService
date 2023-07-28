const express= require('express');
const setupAndstartServer= async ()=>{
   const app= express();
    const PORT= 3000;
    app.listen(PORT, ()=>{
        console.log(`Serve is started${PORT}`);
        console.log(process);
    });

}


setupAndstartServer();