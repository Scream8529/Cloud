const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const fileUpload = require('express-fileupload')
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const cors = require('cors')
const os = require('os')
const cluster = require('cluster')

const PORT = config.get('serverPort')
const MONGOLINK = config.get('mongoDBConnectionURL')

const app = express()

app.use(fileUpload({}))
app.use(cors())
app.use(express.json())
app.use(express.static('static'))
// app.use((req,res,next)=>{
//     if (cluster.isWorker){
//         console.log('Claster worked id: ', cluster.worker.id)
//     }
//     next()
// })


app.use("/api/auth", authRouter)
app.use('/api/files', fileRouter)


if (cluster.isMaster){
    let cpus = os.cpus().length
    for (let i = 0; i<cpus; i++){
        cluster.fork()
    }
    cluster.on('exit', (worker, code) => {
        console.log(
          `Worker ${worker.id} finished. Exit code: ${code}`
        );
    
        app.listen(PORT, () =>{
            mongoose.connect(MONGOLINK,{ useNewUrlParser: true, useUnifiedTopology: true })
          console.log(`Worker ${cluster.worker.id} launched`)}
        );
      });
} else {
    app.listen(PORT,  () =>{
        mongoose.connect(MONGOLINK,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`Worker ${cluster.worker.id} launched`)}
  );
}
// const start = async () => {
//     try {
//         mongoose.connect(MONGOLINK)
//         app.listen(PORT, () => {
//             console.log(`сервер на порту ${PORT}`)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

