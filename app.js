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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(methodOverride('_method'));

const session = require('express-session');
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));

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
