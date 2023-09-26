const fs = require('fs');
const path = require("path");
const userPath = path.join(__dirname, '../models/user.json'); // guardo la direccion del json
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lo leo y guardo en products
const users= require("../models/user.json")

const {validationResult}= require('express-validator')
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
        res.redirect('/')
    },
    userNew: (req, res) => {
const errors= validationResult(req)
console.log(errors.mapped());

if(errors.isEmpty()){
    let newUser = req.body;
		newUser.id = `${users.length +1}`
		users.push(newUser);
		fs.writeFileSync(userPath, JSON.stringify(users)); //cambia de javascript a json para poder guardar products
		res.redirect('/');
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