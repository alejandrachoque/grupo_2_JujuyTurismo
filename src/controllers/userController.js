const uController={
    renderRegist:(req,res)=>{
        res.render('register')
    },
    createUser:(req,res)=>{
        res.redirect('/')
    },
    
}


module.exports=uController