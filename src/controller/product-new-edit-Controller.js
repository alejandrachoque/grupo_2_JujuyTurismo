const fs = require('fs');
const path = require("path");
const productsFilePath = path.join(__dirname, '../models/products.json'); // guardo la direccion del json
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); // lo leo y guardo en products
const productNewEditController = {
    crear: (req,res) => {
        //console.log('entre a crear')
        res.render('productNew');
        
    },
     //aun no esta implementado
    AllProducts: (req, res) => {
		let newProduct = req.body;
		newProduct.id = `${products.length +1}`
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(stringify("products"))); //cambia de javascript a json para poder guardar products
		res.redirect('/productsList');
        
	},
    editar: (req,res) => {
        //para agregar cuando este la base de datos
        const idP = req.params;
        //console.log('idP:' + idP.id)
		const productToEdit = products.find((p) => p.id == idP.id);
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
    }
}

module.exports = productNewEditController;
