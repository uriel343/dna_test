"use strict";

const register = require("../models/registerModel");

async function verificatorDNA(req, res) {
  try {
    let dnaArr = req.body.dna;

    if (!Array.isArray(dnaArr))
      return res.status(400).send({ message: "Please entry an array value" });
    if (dnaArr <= 0)
      return res
        .status(400)
        .send({ message: "Please entry at least one value in the array" });

    for (let i = 0; i < dnaArr.length; i++) {
      let counter = 1;
      let contentArr = dnaArr[i] || "";
      let result;
      let caseHuman;
      let caseMutant;

      if (!typeof contentArr === "string") {
        return res
          .status(400)
          .send({ message: "You had entry an invalid value into array" });
      }

      let verificator = contentArr.split("");
      console.log(verificator);
      for (let j = 0; j < verificator.length - 1; j++) {
        let letter = verificator[j];
        if(letter !== 'A' || letter !== 'T' || letter !== 'C' || letter !== 'G') return res.status(404).send({ message: "The characters from dna are invalid, please entry valid values (A,T,C,G)" })
        if (letter == verificator[j + 1]) {
          counter++;
          if (counter === 4) {
            result = "Mutant";
          } else {
            result = "Human";
          }
        } else {
          counter = 1;
        }
      }

      if (result === "Mutant") {
        caseMutant = verificator.join("");
        registerMutant(caseMutant);
      } else {
        caseHuman = verificator.join("");
        registerHuman(caseHuman);
      }
    }
    return res.status(200).send({ message: "OK " });
  } catch (error) {
    console.error(error);
  }
}

function registerHuman(human_dna) {
  try {
    let human = new register();
    const type = "HUMAN";
    register.findOne({ dna_string: human_dna }, (err, dnaFound) => {
      if (err) return err;
      if (!dnaFound) {
        human.type = type;
        human.dna_string = human_dna;
        human.save((err, dnaRegistered) => {
          if (err) return err;
          if (!dnaRegistered) {
            console.log(dnaRegistered);
            return dnaRegistered;
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function registerMutant(mutant_dna) {
  try {
    let mutant = new register();
    const type = "MUTANT";
    register.findOne({ dna_string: mutant_dna }, (err, dnaFound) => {
      if (err) return err;
      if (!dnaFound) {
        mutant.type = type;
        mutant.dna_string = mutant_dna;
        mutant.save((err, dnaRegistered) => {
          if (err) return err;
          if (!dnaRegistered) console.log(dnaRegistered);
          return dnaRegistered;
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function readStats(req, res) {
  try {
     register.countDocuments({type : "MUTANT"}, (err, numberOfMutants)=>{
      if(err) return res.status(500).send({ message: "Server error" })
        if(!numberOfMutants) return res.status(404).send({ message: "Cannot count the documents from mutants" })
          register.countDocuments({type: "HUMAN"}, (err, numberOfHumans)=>{
            if(err) return res.status(500).send({ message: "Server error" })
              if(!numberOfHumans) return res.status(500).send({ message: "Cannot count the documents from humans" })
                let totallystats = numberOfMutants + numberOfHumans
                let percentageMutants = (numberOfMutants * 100)/totallystats
                return res.status(200).send({ count_mutant_dna : numberOfMutants, count_human_dna: numberOfHumans, ratio: percentageMutants })
      })
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  verificatorDNA,
  readStats,
};
