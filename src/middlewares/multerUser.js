const multer= require('multer');
const path = require('path');
const storage = multer.diskStorage({

    destination: function(req,file,cb){
const pathFile= path.join(__dirname,'..','..','public','images','users')
cb(null,pathFile)
    },
    filename: function(req,file,cb){
const newName= 'user-' + Date.now()+path.extname(file.originalname);
cb(null, newName)
    }
    
}

)
 const uploadUser= multer({storage});


 module.exports=uploadUser;