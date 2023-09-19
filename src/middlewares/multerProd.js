const multer= require('multer');
const path = require('path');
const storage = multer.diskStorage({

    destination: function(req,file,cb){
const pathFile= path.join(__dirname,'..','..','public','images','products')
cb(null,pathFile)
    },
    filename: function(req,file,cb){
const newName= 'img-' + Date.now()+path.extname(file.originalname);
cb(null, newName)
    }
    
}

)
 const upload= multer({storage});


 module.exports=upload;