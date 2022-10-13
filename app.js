const express = require('express');
const path = require("path");
const app = express();

app.get("/", (req, res)=>{

    //res.send("hello world")
    res.sendFile(path.join(__dirname + "/public/index.html"));

})

app.get("/", (req, res)=>{

    res.sendFile(path.join(__dirname + "/public/consultarorden.html"))

})

app.listen(3000,()=>{
    console.log("Server corriendo en el puerto ", 3000);
});