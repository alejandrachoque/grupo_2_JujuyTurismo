const express = require('express');
const router = express.Router();
const carroController = require("../controller/carroController")

router.get('/',carroController.listar)
module.exports = router;