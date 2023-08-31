const express = require('express');
const router = express.Router();
const productNewEditController = require("../controller/product-new-edit-Controller")

router.get("/crear", productNewEditController.crear);
router.post('/', productNewEditController.momentaneo); 


router.get('/editar', productNewEditController.editar); // agregar "/:id" cuando contemos con la base de datos para saber el id del producto a editar
router.put('/editar', productNewEditController.momentaneo); // agregar "/:id" cuando contemos con la base de datos para saber el id del producto a editar

//carrito de compras//

module.exports = router;