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
        res.render('register')
    },
    /*crear:(req,res)=>{
        res.redirect('/')
    },*/

    login:(req,res)=>{
        //console.log(req.session)
        res.render('login')
    },
    entrar: async (req,res)=>{ 
        const errors= validationResult(req)
        if(errors.isEmpty()){
        let buscadorEmail = await db.User.findOne({
            where: {
                Email: req.body.email
            }
        })
        let usuarioALoguear = buscadorEmail //users.find(em => em['email'] === req.body.email);
        if(usuarioALoguear){
            console.log("entre email")
            let buscadorContra = await db.User.findOne({
                where: {
                    Password: req.body.password
                }
            })
            let esSuContra = buscadorContra //bcrypt.compareSync(req.body.password, usuarioALoguear.password);
            if(esSuContra){
                console.log("entre password")
                delete usuarioALoguear.password;
                req.session.userLogged = usuarioALoguear;
                return res.redirect('/register/perfil'); // va al perfil directo si entra
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Datos erroneos'
                    }
                }
            })
        }else{
            res.render('login') // falta mensaje de usuario no existe
        }
        
        }else{
            res.render('login',{
                errors:errors.mapped(),
                old:req.body
            })}
        //res.redirect('/')
    },
    salir: (req, res) =>{
        req.session.destroy()
        res.redirect('/')
    },
    userNew: async (req, res) => {
                const errors= validationResult(req)
                //console.log(errors.mapped());
                if(errors.isEmpty()){
                    //let asd = bcrypt.hashSync(req.body.password,10)
                        await db.User.create({
                            FirstName: req.body.Nombre,
                            LastName: req.body.Apellido,
                            Email: req.body.email,
                            Password: req.body.password // falta la encriptacion
                        })
                /*
                newUser= req.body
                newUser={
                    ...req.body,
                    password: bcrypt.hashSync(req.body.password,10),
                    foto:req.file.filename    
                }
                        newUser.id = `${users.length +1}`
                        
                        users.push(newUser);
                    
                    
                        fs.writeFileSync(userPath, JSON.stringify(users)); //cambia de javascript a json para poder guardar products
                        */


                console.log("creado: ")
                res.redirect('/');
                    /*let newUser={
                        ...req.body,
                    contraseña:bcrypt.hashSync(req.body.contraseña,10),
                    perfil: req.file?.filename*/       
                }else{
                    res.render('register',{
                        errors:errors.mapped(),
                        old:req.body
                    })
                }

	},
    editar: async (req,res) => {
        const u = await req.session.userLogged
        res.render('registerEdit', {u})


        /*
        //para agregar cuando este la base de datos
        const idU = req.params;
        //console.log('idP:' + idP.id)
		const userToEdit = users.find((u) => u.id == idU.id);
        //console.log('productToEdit ' + productToEdit.id)
		res.render('productEdit', {productToEdit}) 
        //esto va en el form -> action -> html: /edit/<%= productToEdit.id %>?_method=PUT
        */

    },
    actualizar: async (req,res) => {
      

        await db.User.update( {FirstName: req.body.Nombre,
                               LastName: req.body.Apellido}, { where: {id: req.params.id}}) 
        //
      
        res.redirect('/register/perfil')
        
    },
    
    /*    
    momentaneo: (req,res) => {
        res.redirect('/');
        
    },
    listar: (req,res) => {
        res.render('productList', {
			arrayP: products
		})
    },
    detalle: (req,res) => {
        const idP = req.params.id;
        //console.log('idP:' + idP)
		const pFind = products.find((p) => p.id == idP); // no se porque no me toma con "===" estricto
        //console.log('pFind:' + pFind.id)
		res.render('detalle', {pFind})
    },*/
    perfil:  (req, res) => { 
        res.render('perfil', {
            user: req.session.userLogged
        })
        
    }
}



module.exports=userController