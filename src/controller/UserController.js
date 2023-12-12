const fs = require('fs');
const path = require("path");
const userPath = path.join(__dirname, '../data/user.json'); // guardo la direccion del json
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lo leo y guardo en products
const users= require("../data/user.json")
const db = require('../database/models')
;

const {validationResult}= require('express-validator')
const bcrypt= require('bcryptjs')
const userController={
    register: (req,res)=>{
        res.render('register', { session: req.session })
    },
    /*crear:(req,res)=>{
        res.redirect('/')
    },*/

    login:(req,res)=>{
        //console.log(req.session)
        res.render('login', { session: req.session })
    },
    entrar: async (req,res)=>{ 
        const errors= validationResult(req)
        if(errors.isEmpty()){
        let buscadorEmail = await db.User.findOne({
            where: {
                Email: req.body.email
            }
        })
        let usuarioALoguear = buscadorEmail 
        if(usuarioALoguear){
            let esSuContra = bcrypt.compareSync( req.body.password ,usuarioALoguear.Password ); // me daba error porque en la base de datos era menor a la cantidad de caracteres que guardaba el hasheo
            if(esSuContra){
                delete usuarioALoguear.password;
                req.session.userLogged = usuarioALoguear;
                return res.redirect('/register/perfil'); // va al perfil directo si entra
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Credenciales erroneas'
                    }
                },
                session: req.session
            })
        }else{
            res.render('login', { session: req.session }) // falta mensaje de usuario no existe
        }
        
        }else{
            res.render('login',{
                errors:errors.mapped(),
                old:req.body,
                session: req.session 
            })}
    },
    salir: (req, res) =>{
        req.session.destroy()
        res.redirect('/')
    },
    userNew: async (req, res) => {
                const errors= validationResult(req)
                if(errors.isEmpty()){
                        await db.User.create({
                            FirstName: req.body.Nombre,
                            LastName: req.body.Apellido,
                            Email: req.body.email,
                            Password: bcrypt.hashSync(req.body.password,10) // encriptacion
                        })


                console.log("creado: ")
                res.redirect('/register/login');     
                }else{
                    res.render('register',{
                        errors:errors.mapped(),
                        old:req.body,
                        session: req.session
                    })
                }

	},
    editar: async (req,res) => {
        const u = await req.session.userLogged
        res.render('registerEdit', {u, session: req.session})

    },
    actualizar: async (req,res) => {
        const u = await req.session.userLogged
        const errors= validationResult(req)
        if(errors.isEmpty()){
          await db.User.update( {FirstName: req.body.Nombre,
                               LastName: req.body.Apellido,
                               Password: bcrypt.hashSync(req.body.password,10) },
                            { where: {id: req.params.id}}) 
        //
        const updatedUser = await db.User.findByPk(req.params.id);
        req.session.userLogged = updatedUser;
        res.redirect('/register/perfil')   
        }else{
            res.render('registerEdit',{
                u,
                errors:errors.mapped(),
                old:req.body,
                session: req.session
            })
        }

       
        
    },

    perfil:  (req, res) => { 
        res.render('perfil', {
            user: req.session.userLogged,
            session: req.session 
        })
        
    }
}



module.exports=userController