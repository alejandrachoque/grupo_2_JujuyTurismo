const path = require("path");
const mainController = {
    index: (req,res) => {
        res.render('index');
    },
    carro:(req,res)=>{
        res.render('carro')
    },
    compraCarro: (req,res)=>{
        res.redirect('/')
    }
}

module.exports = mainController;