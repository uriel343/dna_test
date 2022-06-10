"use strict";

const express = require("express");

const readDNAController = require("../controllers/readDNAController");

const api = express.Router();

api.post("/mutant", readDNAController.verificatorDNA);
api.get("/stats", readDNAController.readStats);

module.exports = api;
