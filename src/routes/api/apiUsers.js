const express = require('express')
const router = express.Router()
const usuarioController = require('../../controller/api/apiUserController')
router.get('/', usuarioController.list);
router.get('/:id', usuarioController.userId)
module.exports = router;