const{body}= require('express-validator')
const path= require('path')
const validacionesLogin=[
body('email').notEmpty().withMessage('Escribí tu correo electronico').bail()
.isEmail().withMessage('Tiene que ser en formato de correo válido'),
body('password').notEmpty().withMessage('Escribí una contraseña'),


]


module.exports= validacionesLogin