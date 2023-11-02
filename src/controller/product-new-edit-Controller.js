const fs = require('fs');
const path = require("path");
const productsFilePath = path.join(__dirname, '../data/products.json'); // guardo la direccion del json
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lo leo y guardo en products
const products= require("../data/products.json")
const db = require('../database/models')
const productNewEditController = {


    //muestra el formulario de agregar producto
    crear: (req,res) => {
        //console.log('entre a crear')
        res.render('productNew');
        
    },
    creando: async (req,res) => {
        /*
        let asd = req.body
        await db.Product.create({
            FirstName: req.body.FirstName,
            FirstDescription: req.body.FirstDescription,
            Description: req.body.Description,
            Price: req.body.Price
        })
        res.redirect('/product')*/
    },
     //aun no esta implementado
     //para crear el producto la logica
    AllProducts: async (req, res) => {
        await db.Product.create({
            FirstName: req.body.FirstName,
            FirstDescription: req.body.FirstDescription,
            Description: req.body.Description,
            Price: req.body.Price
        })
        res.redirect('/product')
        /*
		let newProduct = req.body;
		newProduct.id = `${products.length +1}`
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products)); //cambia de javascript a json para poder guardar products
		res.redirect('/product');
        */
        
	},
    editar:  async (req,res) => {
        const product = await db.Product.findByPk(req.params.id)
        res.render('productEdit', {product})
        /*
        //para agregar cuando este la base de datos
        const idP = req.params;
        //console.log('idP:' + idP.id)
		const productToEdit = products.find((p) => p.id == idP.id);
        //console.log('productToEdit ' + productToEdit.id)
		res.render('productEdit', {productToEdit}) 
        //esto va en el form -> action -> html: /edit/<%= productToEdit.id %>?_method=PUT
        */
    },    
    actualizar: async (req,res) => {

        await db.Product.update( req.body, { where: {id: req.params.id}})
        res.redirect('/product')
        /*
        const idP = req.params;
        console.log(idP);
        let producActualizado = req.body;
        const productToEdit = products.findIndex((p) => p.id == idP.id);
        console.log(productToEdit);
        products[productToEdit] = {
            id: idP.id,
            firstName: producActualizado.name,
            image: '../../images/Salinas-Grandes.jpg', //falta agregar el campo de imagen en el formulario, tambien para first description
            firstDescription: "Descpripcion grande",
            description: producActualizado.description,
            price: producActualizado.price
        }
        fs.writeFileSync(productsFilePath,JSON.stringify(products));
        //console.log(products)
        res.redirect('/product');
        */
    },
    listar: (req,res) => {
        const test = db.Product.findAll()
        .then((products) => {
            res.render('productList', { products })
            console.log("entre: " + {test})
        })
        /*
        res.render('productList', {
			arrayP: products
		})*/
    },
    detalle: (req,res) => {

        db.Product.findByPk(req.params.id)
        .then(product => {
            res.render('detalle', { product})
        })
        /*
        const idP = req.params.id;
        //console.log('idP:' + idP)
		const pFind = products.find((p) => p.id == idP); // no se porque no me toma con "===" estricto
        //console.log('pFind:' + pFind.id)
		res.render('detalle', {pFind}
        */
    },
    borrar: async (req,res)=>{
        await db.Product.destroy( { where: { id: req.params.id}})
        res.redirect('/product')
        /*
        const {id}= req.params;

        const indiceProduct= products.findIndex((prod)=> prod.id===id);
        products.splice(indiceProduct,1);

        fs.writeFileSync(productsFilePath,JSON.stringify(products));

        res.redirect('/product')
        */
    }
}

module.exports = productNewEditController;
