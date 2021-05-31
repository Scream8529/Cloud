const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const cors = require('cors')
 

const PORT = config.get('serverPort')
const MONGOLINK = config.get('mongoDBConnectionURL')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)

const start = async () => {
    try {
        mongoose.connect(MONGOLINK)
        app.listen(PORT, () => {
            console.log(`сервер на порту ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()