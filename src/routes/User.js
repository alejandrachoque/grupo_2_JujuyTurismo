const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');
const uploadUser= require('../middlewares/multerUser')
const Login = require('../middlewares/validacionesLogin');
//requiriendo las validaciones de express
const usuarioLogueado = require('../middlewares/logueado')
const validaciones= require('../middlewares/validacionesRegistro')
router.get('/',usuarioLogueado,userController.register)

router.post('/',uploadUser.single('perfil'),validaciones,userController.userNew)


router.get('/login',usuarioLogueado,userController.login)
router.post('/login',Login,userController.entrar)

module.exports= router