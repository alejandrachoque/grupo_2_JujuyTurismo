
const db = require('../../database/models')



module.exports = {
    list: async (req,res) => {
        const productos = await db.Product.findAll({attributes: ['id','FirstName', 'FirstDescription'], raw: true,
        include: [ // al hacer el include no se muestran todos los usuarios del producto, solo 1 pero se repiten los productos
            {
                model: db.User,
                as: 'users',
                through: {
                    model: db.User_prod,
                    attributes: []
                },
                attributes: ['id', 'FirstName', 'LastName', 'Email'],  
                foreignKey: 'id_produc',  
                otherKey: 'id_user',  
            }
        ],
        //group: ['Product.id'] // si saco el group se muestran todos los usuarios pero el product se repite
    });
        let i = 0;
        
        
        while( i < productos.length){

            productos[i]["detalle"] = "http://localhost:3000/api/products/" + (productos[i].id); // 
            i++;

        }
        const productosUnicos = new Set(productos.map(producto => producto.id)); // con map creamos un nuevo array y con Set evitamos que sean duplicados para poder contar bien

        res.json({
          count: productosUnicos.size, // aca usamos size, que es lo mismo que length pero para conjuntos porque hicimos un conjunto con Set
          products: productos,
        });
    },
        productId: async (req,res) => {
            const productos = await db.Product.findAll({ // con find all se repiten los productos pero muestra los usuarios asociados a el
                // se podria hacer un findone de product y despues un findall de user para evitar la repeticion pero seria alargar el codigo
                where: {
                    id: req.params.id
                },
                attributes: ['id','FirstName','FirstDescription' ,'Description', 'Image', 'Link', 'Price'], raw: true,
                include: [ 
                    {
                        model: db.User,
                        as: 'users',
                        through: {
                            model: db.User_prod,
                            attributes: []
                        },
                        attributes: ['id', 'FirstName', 'LastName', 'Email'],  
                        foreignKey: 'id_produc',  
                        otherKey: 'id_user',  
                    }
                ],
                
            })
            if (!productos) {
                return res.status(404).json({ error: 'Producto no encontrado' }); // por si no existe el producto
            }
            
            res.json({
                productos 
            })
        }

}