"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let human_mutant_schema = Schema({
  type: String,
  dna_string: String,
});

module.exports = mongoose.model("human_mutant", human_mutant_schema);
