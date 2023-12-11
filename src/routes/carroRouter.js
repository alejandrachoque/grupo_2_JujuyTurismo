const express = require('express');
const router = express.Router();
const usuarioNoLogueado = require('../middlewares/noLogueado')
const carroController = require("../controller/carroController")

router.get('/',usuarioNoLogueado,carroController.listar)
router.delete('/quitar/:id',usuarioNoLogueado,carroController.quitar) // quitar
module.exports = router;