const{body}= require('express-validator')
const path= require('path')
const db = require('../database/models');
const validacionesRegistro=[body('Nombre').notEmpty().withMessage('Tenés que escribir un nombre').isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
body('Apellido').notEmpty().withMessage('Tenés que escribir un apellido').isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
body('password').notEmpty().withMessage('Escribí una contraseña').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')

]


module.exports= validacionesRegistro