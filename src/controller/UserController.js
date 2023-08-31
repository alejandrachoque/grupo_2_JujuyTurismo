
const userController={
    register: (req,res)=>{
        res.render('register')
    },
    crear:(req,res)=>{
        res.redirect('/')
    },

    login:(req,res)=>{
        res.render('login')
    },
    entrar:(req,res)=>{
        res.redirect('/')
    }
}


module.exports=userController