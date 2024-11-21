
const express = require('express');
const logInrouter = express.Router();
const jwt = require('jsonwebtoken');
const logInController = require('../controllers/logInController');

const authnticationController = (req, res, next) => {

    console.log("AUTHENTICATION CONTROLLER");

    const token = req.header('authorization');
    console.log("TOKEN : ", token);
    if(token){
        next();
    }

}

logInrouter.post('/', logInController.logInPostController);
logInrouter.post('/register', authnticationController, logInController.registerController);

module.exports = logInrouter;








