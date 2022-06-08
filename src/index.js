'use strict'

const { app, PORT } = require('./app');
const config = require('./config');

const dotenv = require('dotenv');

dotenv.config();

async function startExpress() {
    await app.listen(PORT, () => {
        console.log(`The server is runnin on ${config.HOST_URL}:${config.PORT}`)
    })
}

startExpress();


