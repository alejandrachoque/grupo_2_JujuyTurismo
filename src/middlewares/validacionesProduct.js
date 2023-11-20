const{body}= require('express-validator')
const path= require('path')
const validaciones=[body('FirstName').notEmpty().withMessage('Tenés que escribir un titulo'),
body('FirstDescription').notEmpty().withMessage('Tenés que escribir un enunciado'),
body('Description').notEmpty().withMessage('Escribí la descripcion'),
body('Price').notEmpty().withMessage('Escribí el precio'),
body('Link').notEmpty().withMessage('Escribí el link')
]


module.exports= validaciones