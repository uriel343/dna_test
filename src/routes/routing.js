'use strict'

const express = require('express');

const readDNAController = require('../controllers/readDNAController');

const api = express.Router();

api.get('/mutant', readDNAController.verificatorDNA );

module.exports = api