const express = require('express');
const router = express.Router();
const productNewEditController = require("../controller/product-new-edit-Controller")



router.get('/', productNewEditController.listar);
router.get('/detalle/:id', productNewEditController.detalle); // <base href="/"> me soluciono todos los problemas

router.get('/editar/:id', productNewEditController.editar); // 
router.put('/editar', productNewEditController.momentaneo); // 
router.get("/crear", productNewEditController.crear);


router.post('/', productNewEditController.momentaneo); 
router.put('/:id', productNewEditController.detalle); //este seria el put de detalle
//carrito de compras//

module.exports = router;