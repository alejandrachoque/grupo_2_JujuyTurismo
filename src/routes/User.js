const express = require('express');
const router = express.Router();
const controllerUser= require('../controller/UserController');
const userController = require('../controller/UserController');

router.get('/',userController.register)

router.post('/',userController.crear)

router.get('/login',userController.login)
router.post('/login',userController.entrar)

module.exports= router