const{body}= require('express-validator')
const path= require('path')
const db = require('../database/models');
const validaciones=[body('Nombre').notEmpty().withMessage('Tenés que escribir un nombre').isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
body('Apellido').notEmpty().withMessage('Tenés que escribir un apellido').isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
body('email').notEmpty().withMessage('Escribí tu correo electronico').bail()
.isEmail().withMessage('Tiene que ser en formato de correo válido')
.custom(async em => {
        yaExiste = await db.User.findOne(
            { // buscamos el email en la base de datos con el where para buscarlo exactamente como esta en el 'email'
                where : {
                    email: em
                        }
        });
        if (yaExiste) 
            {
                throw new Error('Ya esta resgistrado ese Email'); // si existe el email salta el error, con esto evitamos email repetidos
            }


}),
body('password').notEmpty().withMessage('Escribí una contraseña').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')

]


module.exports= validaciones