const express = require('express');
const router = express.Router();
const detalleController = require("../controller/detalleController")


router.get("/", detalleController.detalle);


module.exports = router;