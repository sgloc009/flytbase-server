const express = require("express");
const app = express();
const http = require("http");
const env = require("dotenv").config().parsed;
// const https = require("https");

app.use(express.static(__dirname+"/public"));
http.createServer(app).listen(env.PORT, ()=>{
    console.log(`App listening at http://localhost:${env.PORT}`)
})