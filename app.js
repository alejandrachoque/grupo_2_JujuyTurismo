const express= require ('express');
const app= express();
const path= require('path');
const mainRouter = require("./src/routes/mainRouter");
const carroRuta = require("./src/routes/carroRouter")
const userRuta= require('./src/routes/User')
const productNewEditController = require("./src/routes/product-new-edit-Router");
//apis
const apiUsers = require('./src/routes/api/apiUsers')
const apiProduct = require('./src/routes/api/apiProducts')
const methodOverride = require('method-override')
const session = require('express-session');
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use( '/', mainRouter);
app.use('/carro', carroRuta);
app.use('/register',userRuta)
app.use('/product', productNewEditController);
//apis
app.use('/api/users', apiUsers)
app.use('/api/products', apiProduct)

app.set('view engine', 'ejs');
app.set('views', './src/views');


const PORT= 3000;

app.listen(PORT,()=>console.log('Corriendo en el puerto: '+PORT));

/* 
app.set('view','ejs');
app.set('views','./src/views');
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './src/views/index.html'))});

app.get('/detalle',(req,res)=>{
        res.sendFile(path.resolve(__dirname, './src/views/detalle.html'))});

app.get('/productos',(req,res)=>{
            res.sendFile(path.resolve(__dirname, './src/views/carro.html'))});
        

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './src/views/register.html'))});

app.post('/register',(req,res)=>{
    res.redirect('/')
})
app.get('/login',(req,res)=>{
    res.sendFile((path.resolve(__dirname, './src/views/login.html')))});
 

app.post('/login',(req,res)=>{
        res.redirect('/')
    })

app.get('/carro',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './src/views/carro.html'))
});
    
app.post('/carro',(req,res)=>{
    res.redirect('/')
})
app.listen(PORT,()=>console.log('Corriendo en el puerto: '+PORT));
*/