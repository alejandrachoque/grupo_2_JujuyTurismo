const path = require("path");
const mainController = {
    index: (req,res) => {
        res.render('index', { session: req.session });
    },
    carro:(req,res)=>{
        res.render('carro', { session: req.session })
    },
    compraCarro: (req,res)=>{
        res.redirect('/', { session: req.session })
    }
}

module.exports = mainController;