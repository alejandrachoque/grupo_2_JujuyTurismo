const fs = require('fs');
const path = require("path");
const db = require('../database/models');

const {validationResult}= require('express-validator')
const bcrypt= require('bcryptjs')
const carroController={
    listar: async (req,res) => {
        let products_id = await db.User_prod.findAll({where: {id_user: req.session.userLogged.id},
        attributes: ['id_produc']});
        //console.log(products_id)
        
        let products = []

        for(const p of products_id){
             products.push(await db.Product.findAll({where : {id: p.id_produc},
                raw: true
            }))
        }

        res.render('carro', {
            user: req.session.userLogged,
            products: products,
            session: req.session 
        })
    },
    quitar: async (req, res) => {
        console.log("entre a quitar")
        const producto = await db.Product.findByPk(req.params.id);

        await db.User_prod.destroy({
            where: {
                id_user: req.session.userLogged.id, // Suponiendo que req.user contiene la información del usuario autenticado
                id_produc: producto.id,
            },
        });
        
            
        res.redirect('/carro');
        
    }

}



module.exports=carroController