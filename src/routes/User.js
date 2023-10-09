const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');
const uploadUser= require('../middlewares/multerUser')
//const LoginController = require('../controller/UserController');
const multerLogin = require('../middlewares/validacionesLogin');
//requiriendo las validaciones de express

const validaciones= require('../middlewares/validacionesRegistro')
router.get('/',userController.register)

router.post('/',uploadUser.single('perfil'),validaciones,userController.userNew)


router.get('/login',multerLogin,userController.login)
router.post('/login',userController.entrar)

module.exports= router