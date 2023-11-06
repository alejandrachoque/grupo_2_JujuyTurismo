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
            products: products
        })
    }

}



module.exports=carroController