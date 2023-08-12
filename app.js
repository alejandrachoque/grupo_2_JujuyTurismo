const express= require('express');
const app= express();
const path= require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

const PORT= 3000;

app.listen(PORT,()=>console.log('Corriendo en el puerto: '+PORT));
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))});
app.post('/register',(req,res)=>{
    res.redirect('/');
})
app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './index.html'))});
app.get('/detalle',(req,res)=>{
        res.sendFile(path.resolve(__dirname, './detalle.html'))});