
const db = require('../../database/models')



module.exports = {
    list: async (req,res) => {
        const productos = await db.Product.findAll({attributes: ['id','FirstName', 'FirstDescription'], raw: true});
        let i = 0;
        
        
        while( i < productos.length){

            productos[i]["detalle"] = "http://localhost:3000/api/products/" + (productos[i].id);
            i++;

        }
        res.json({
            count: productos.length,
            products: productos,
        })
    },
    productId: async (req,res) => {
        const productos = await db.Product.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id','FirstName','FirstDescription' ,'Description', 'Image', 'Link', 'Price']
        })
        
        res.json({
            productos 
        })
    }

}