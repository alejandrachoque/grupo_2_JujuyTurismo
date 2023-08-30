const path = require("path");
const productNewEditController = {
    crear: (req,res) => {
        res.render('productNew');
        
    },
    /* por si usamos un json como base de datos 
    	AllProducts: (req, res) => {
		let newProduct = req.body;
		newProduct.id = `${products.length +1}`
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(stringify("nombreDelArchivo"))); //cambia de javascript a json para poder guardar products
		res.redirect('/products');

	}
    
    
    */ 
    editar: (req,res) => {
        //para agregar cuando este la base de datos
        //const idP = req.params;
		//const productToEdit = product.find((p) => p.id === idP);
		//res.render('productEdit', {productToEdit}) 
        //esto va en el form -> action -> html: /edit/<%= productToEdit.id %>?_method=PUT
        res.render('productEdit');
    },    
    momentaneo: (req,res) => {
        res.redirect('/');
        
    }
}

module.exports = productNewEditController;
