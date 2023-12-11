const express = require('express');
const router = express.Router();
const mainController = require("../controller/mainController")
const carroController = require("../controller/carroController")
router.get("/", mainController.index);
router.delete('/quitar/:id',carroController.quitar) // quitar
//router.get('/carro',mainController.carro)
router.post('/carro',mainController.compraCarro)


module.exports = router;