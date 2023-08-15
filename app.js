const express= require ('express');
const app= express();
const path= require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

const PORT= 3030;

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))});

app.get('/detalle',(req,res)=>{
        res.sendFile(path.resolve(__dirname, './views/detalle.html'))});

app.get('/productos',(req,res)=>{
            res.sendFile(path.resolve(__dirname, './views/carrito.html'))});
        

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))});

app.post('/register',(req,res)=>{
    res.redirect('/')
})
app.get('/login',(req,res)=>{
    res.sendFile((path.resolve(__dirname, './views/login.html')))});
 

app.post('/login',(req,res)=>{
        res.redirect('/')
    })

app.get('/carro',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/carro.html'))
});
    
app.post('/carro',(req,res)=>{
    res.redirect('/')
})
app.listen(PORT,()=>console.log('Corriendo en el puerto: '+PORT));