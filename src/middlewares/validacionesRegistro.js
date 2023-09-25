const{body}= require('express-validator')

const validaciones=[
body('perfil').notEmpty(),//opcional
body('Nombre').notEmpty().withMessage('Tenés que escribir un nombre'),
body('Apellido').notEmpty().withMessage('Tenés que escribir un apellido'),
body('email').notEmpty().withMessage('Escribí tu correo electronico').bail()
.isEmail().withMessage('Tiene que ser en formato de correo válido'),
body('contraseña').notEmpty().withMessage('Escribí una contraseña')
]


module.exports= validaciones