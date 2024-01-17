const express  = require('express');
const calculator =  require('../calculator.js');
const router = express.Router();

router.post("/" , (req , res)=>{
    const{num1 , num2 , op} = req.body;
    console.log("Received:", num1, num2, op);
    const result = calculator(num1 , num2 , op);
    console.log("cal ke neche");
    res.status(201).send({result});
})
module.exports = router;