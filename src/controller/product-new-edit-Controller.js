const fs = require('fs');
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/products.json'); // guardo la direccion del json
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lo leo y guardo en products
const products= require("../data/products.json")
const db = require('../database/models')
const multerino = require('../middlewares/multerProd')
const {validationResult}= require('express-validator')
const productNewEditController = {


    //muestra el formulario de agregar producto
    crear: (req,res) => { 
        //console.log('entre a crear')
        res.render('productNew', { session: req.session });
        
    },
    AllProducts: async (req, res) => {
        
        
        const errors= validationResult(req)
        if(errors.isEmpty()){
            await db.Product.create({
                FirstName: req.body.FirstName,
                Image: req.file.filename,
                Link: req.body.Link,
                FirstDescription: req.body.FirstDescription,
                Description: req.body.Description,
                Price: req.body.Price
            })
            res.redirect('/product')
        }else{
            res.render('productNew',{
                errors:errors.mapped(),
                old:req.body,
            })
        }
        
	},
    editar:  async (req,res) => {
        const product = await db.Product.findByPk(req.params.id)
        res.render('productEdit', { product, session: req.session})
        
    },    
    actualizar: async (req, res) => {
        console.log("entre");
        const errors = validationResult(req);
    
        if (req.session.errors && req.session.errors.Imagen) {
            req.session.errors.Imagen = null;
        }
    
        if (errors.isEmpty()) {
            if (req.file) {
                const Img = req.file.filename;  
                req.body.Image = Img;
            }
            await db.Product.update(req.body, { where: { id: req.params.id } });
            res.redirect('/product');
        } else {
            req.session.errors = errors.mapped();
            res.redirect(`/product/editar/${req.params.id}`); // la unica solucio que pude encontrar fue forzandolo
        }
    },
    listar: (req,res) => {
        const test = db.Product.findAll()
        .then((products) => {
            res.render('productList', { products, session: req.session})
            
        })
        
    },
    detalle: (req,res) => {

        db.Product.findByPk(req.params.id)
        .then(product => {
            res.render('detalle', { product, session: req.session})
        })
        
    },
    borrar: async (req,res)=>{
        await db.Product.destroy( { where: { id: req.params.id}})
        res.redirect('/product')
        
    },
    comprar: async (req,res)=>{
        console.log("entre")
        await db.User_prod.create({
            id_user: req.session.userLogged.id, //usuario
            id_produc: req.params.id  //producto
        })
        res.redirect('/product')
    }
}

module.exports = productNewEditController;
