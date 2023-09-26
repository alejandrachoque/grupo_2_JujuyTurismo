const{body}= require('express-validator')

const validaciones=[
body('perfil').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];
    
    if (!file) {
        throw new Error('Tienes que subir una imagen');
    } else {
        let fileExtension = path.extname(file.originalname);
        if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }
    }

    return true;
}),//opcional
body('Nombre').notEmpty().withMessage('Tenés que escribir un nombre'),
body('Apellido').notEmpty().withMessage('Tenés que escribir un apellido'),
body('email').notEmpty().withMessage('Escribí tu correo electronico').bail()
.isEmail().withMessage('Tiene que ser en formato de correo válido'),
body('contraseña').notEmpty().withMessage('Escribí una contraseña')
]


module.exports= validaciones