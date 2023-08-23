const express= require('express');
const app= express();
const path= require('path');
const mainRouter = require("./src/routes/mainRouter")
const detalleRouter = require("./src/routes/detalleRouter")

app.use(express.static(path.resolve(__dirname, 'public')));



app.use( '/', mainRouter);
app.use('/detalle', detalleRouter);

app.set('view engine', 'ejs');
app.set('views', './src/views');


const PORT= 3000;

app.listen(PORT,()=>console.log('Corriendo en el puerto: '+PORT));




//app.get('/register',(req,res)=>{
//    res.sendFile(path.resolve(__dirname, './views/register.html'))});
//app.post('/register',(req,res)=>{
//    res.redirect('/');
//})
//app.get('/home',(req,res)=>{
//   res.sendFile(path.resolve(__dirname, './index.html'))});
//app.get('/detalle',(req,res)=>{
//        res.sendFile(path.resolve(__dirname, './views/detalle.html'))});
