const{body}= require('express-validator')
const path= require('path')
const validaciones=[body('FirstName').notEmpty().withMessage('Tenés que escribir un titulo').isLength({ min: 5 }).withMessage('El titulo debe tener al menos 5 caracteres'),
body('FirstDescription').notEmpty().withMessage('Tenés que escribir un enunciado').isLength({ min: 10 }).withMessage('El enunciado debe tener al menos 10 caracteres'),
body('Description').notEmpty().withMessage('Escribí la descripcion').isLength({ min: 15 }).withMessage('La descripcion debe tener al menos 15 caracteres'),
body('Price').notEmpty().withMessage('Escribí el precio').isLength({ min: 2 }).withMessage('El precio debe tener al menos 2 caracteres'),
body('Link').notEmpty().withMessage('Escribí el link'),
body('Imagen').custom((value, { req }) => {
    
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    if (!file) {
        throw new Error('Debes subir al menos una imagen del producto')
    } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`El archivo subido no es válido. Las extensiones permitidas son ${acceptedExtensions.join(', ')}`)
        }
    }
    return true;    
})
]


module.exports= validaciones