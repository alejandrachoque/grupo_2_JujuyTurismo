const fs = require('fs');
const path = require("path");
const userPath = path.join(__dirname, '../data/user.json'); // guardo la direccion del json
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lo leo y guardo en products
const users= require("../data/user.json")
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

        res.render('login')
    },
    entrar:(req,res)=>{ 
        
        let usuarioALoguear = users.find(em => em['email'] === req.body.email);
        if(usuarioALoguear){
            let esSuContra = bcrypt.compareSync(req.body.password, usuarioALoguear.password);
            if(esSuContra){
                return res.redirect('/'); // cambiar a la pagina home despues
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'Datos erroneos'
                    }
                }
            })
        }
        //res.redirect('/')
    },
    userNew: (req, res) => {
const errors= validationResult(req)
//console.log(errors.mapped());
if(errors.isEmpty()){
newUser= req.body
newUser={
    ...req.body,
    password: bcrypt.hashSync(req.body.password,10),
    foto:req.file.filename    
}
		newUser.id = `${users.length +1}`
        
		users.push(newUser);
      
    
		fs.writeFileSync(userPath, JSON.stringify(users)); //cambia de javascript a json para poder guardar products
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








		
        
	},/*
    editar: (req,res) => {
        //para agregar cuando este la base de datos
        const idU = req.params;
        //console.log('idP:' + idP.id)
		const userToEdit = users.find((u) => u.id == idU.id);
        //console.log('productToEdit ' + productToEdit.id)
		res.render('productEdit', {productToEdit}) 
        //esto va en el form -> action -> html: /edit/<%= productToEdit.id %>?_method=PUT
        
    },    
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
   
}



module.exports=userController