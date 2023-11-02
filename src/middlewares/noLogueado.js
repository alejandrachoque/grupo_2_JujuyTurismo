function noLogueado(req,res,next){
    if(!req.session.userLogged){
        return res.redirect('/register/login');
    }
        next();
    
}
module.exports = noLogueado;