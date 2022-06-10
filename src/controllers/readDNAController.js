"use strict";

function verificatorDNA(req, res) {
  try {
    let dnaArr = req.body.dnaArr; // ["holaaa", "holaa", "hola"]

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

      if (!typeof contentArr === "string") {
        return res
          .status(400)
          .send({ message: "You had entry an invalid value into array" });
      }

      let verificator = contentArr.split("");

      for (let j = 0; j < verificator.length - 1; j++) {
        let letter = verificator[j];
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
      console.log(result);
    }
    return res.status(200).send({ message: "Im the best" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  verificatorDNA,
};
