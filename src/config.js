'use strict'
const dotenv = require('dotenv')
dotenv.config()
const HOST_URL = process.env.HOST_URL || "http://localhost";
const PORT = process.env.PORT || 3000;
const MONGO_DB_URL =
  process.env.MONGO_DB_URL || '';

module.exports = {
    PORT,
    HOST_URL,
    MONGO_DB_URL
}