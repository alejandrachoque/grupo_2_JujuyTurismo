const express = require('express');
const router = express.Router();


///requerir multer de un middleware aparte
const uploadMulterProd= require('../middlewares/multerProd');
const productNewEditController = require("../controller/product-new-edit-Controller")






router.get('/', productNewEditController.listar);
router.get('/detalle/:id', productNewEditController.detalle); // <base href="/"> me soluciono todos los problemas

router.get('/editar/:id', productNewEditController.editar); // 
router.put('/editar', productNewEditController.momentaneo); // 
router.get("/crear", productNewEditController.crear);

//crea
//implementamos multer
router.post('/',uploadMulterProd.single('image'),productNewEditController.AllProducts)

router.post('/', productNewEditController.momentaneo); 
router.put('/:id', productNewEditController.detalle); //este seria el put de detalle
//carrito de compras//

//delete producto
router.delete('/delete/:id',productNewEditController.borrar)
module.exports = router;