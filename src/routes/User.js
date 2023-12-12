const express = require('express');
const router = express.Router();

const userController = require('../controller/UserController');
const uploadUser= require('../middlewares/multerUser')
const Login = require('../middlewares/validacionesLogin');
//requiriendo las validaciones de express
const usuarioLogueado = require('../middlewares/logueado')
const usuarioNoLogueado = require('../middlewares/noLogueado')
const validaciones= require('../middlewares/validacionesRegistro')
const validacionesRegistro = require('../middlewares/validacionesRegistroEdit')
router.get('/',usuarioLogueado,userController.register)

router.post('/',uploadUser.single('perfil'),validaciones,userController.userNew)

router.get('/editar/:id', userController.editar )
router.put('/editar/:id',validacionesRegistro, userController.actualizar)

router.get('/login',usuarioLogueado,userController.login)
router.post('/login',Login,userController.entrar)
router.get('/logout', userController.salir)

router.get('/perfil',usuarioNoLogueado, userController.perfil)

module.exports= router