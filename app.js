const express = require('express');
const path = require("path");
const app = express();

var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'tacos',
    user: 'root',
    password: 'L3usM4fi3r-'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA');
    }
});
conexion.end();
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