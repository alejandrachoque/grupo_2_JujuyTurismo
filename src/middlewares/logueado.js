function logueado(req,res,next){
    if(req.session.userLogger){
        return res.redirect('/');
    }
        next();
    
}
module.exports = logueado;