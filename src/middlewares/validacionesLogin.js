const{body}= require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const Loginn=[
body('email')
    .notEmpty().withMessage('Escribí tu correo electronico').bail()
    .isEmail().withMessage('Tiene que ser en formato de correo válido').custom(async em => {
        siExiste = await db.User.findOne(
            { // buscamos el email en la base de datos con el where para buscarlo exactamente como esta en el 'email'
                where : {
                    email: em
                        }
        });
        if (!siExiste) 
            {
                throw new Error('Credenciales erroneas'); // si no existe mostramos el error
            }


        }),
body('password').notEmpty().withMessage('Escribí una contraseña').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
.custom(async (pass, { req }) => {
        if (req.body.email && siExiste) { // usamos el req para comparar y entrar en el if
            let contrasenia = await bcrypt.compare(pass, siExiste.Password); // comparamos desencriptando la contraseña
            if (contrasenia) {
                return true
            }
           
        } throw new Error('Credenciales erroneas'); // si no coincide mostramos este error
    

})
]


module.exports= Loginn;