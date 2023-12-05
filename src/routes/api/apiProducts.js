const express = require('express')
const router = express.Router()
const productController = require('../../controller/api/apiProductController')
router.get('/', productController.list);
router.get('/:id', productController.productId)
module.exports = router;