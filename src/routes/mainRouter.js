const express = require('express');
const router = express.Router();
const mainController = require("../controller/mainController")

router.get("/", mainController.index);
router.get('/carro',mainController.carro)



module.exports = router;