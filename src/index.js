'use strict'

const { app, PORT } = require('./app');
const config = require('./config');

const mongoose = require('mongoose')
const dotenv = require('dotenv');
const DATE_NOW = new Date()

dotenv.config();

async function startExpress() {
    try {
        await app.listen(PORT, () => {
            console.log(`The server is runnin on ${config.HOST_URL}:${config.PORT}`)
        })
    } catch (error) {
       console.error(error) 
    }

}

async function initializeMongo(){
    try {                                       
        const client = await mongoose.connect(config.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log(`[${DATE_NOW}] ==> Mongo was initialized`)
        await startExpress()
        //When you leave of the server
        process.on('SIGINT', async()=>{
            console.log(`[${DATE_NOW}] ==> Mongo was disconnected`)
        })
    } catch (error) {
        console.log(`[${DATE_NOW}] ==> ${error.message}`)
    }
}



initializeMongo();


