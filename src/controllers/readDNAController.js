'use strict'

function verificatorDNA(req, res) {
    try {
        let dnaArr = req.body.dnaArr
        let contentArr
    
        if(!Array.isArray(dnaArr)) return res.status(400).send({ message: "Please entry an array value" })
        if(dnaArr <= 0) return res.status(400).send({ message: "Please entry at least one value in the array" })
    
        for(let i = 0; i <= dnaArr.length; i++){
            contentArr = dnaArr[i]
    
            console.log(contentArr)
        }
    
        return res.status(200).send({ contentArr })  
    } catch (error) {
        console.error("Something was wrong, please try again")
    }

    
}

module.exports = {
    verificatorDNA
}