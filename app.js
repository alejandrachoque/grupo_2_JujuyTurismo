const express= require('express');
const app= express();
const path= require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

const PORT= 3000;

app.listen(PORT,()=>console.log('Corriendo en el puerto: '+PORT));