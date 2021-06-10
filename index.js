const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const fileUpload = require('express-fileupload')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const cors = require('cors')
 

const PORT = config.get('serverPort')
const MONGOLINK = config.get('mongoDBConnectionURL')

const app = express()

app.use(fileUpload({}))
app.use(cors())
app.use(express.json())
app.use(express.static('static'))
app.use("/api/auth", authRouter)
app.use('/api/files', fileRouter)

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