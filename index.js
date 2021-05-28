const express = require('express')
const app = express()
const PORT = 8080
const mongoose = require('mongoose')
const MONGOLINK = "mongodb+srv://cloudmaster:cloudmaster3000@cloud.1ea2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


function start(){
    app.listen(PORT, ()=>{
        console.log(`сервер на порту ${PORT}`)
    })
}
start()