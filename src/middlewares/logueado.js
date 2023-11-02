function logueado(req,res,next){
    if(req.session.userLogged){
        return res.redirect('/register/perfil');
    }
        next();
    
}
module.exports = logueado;