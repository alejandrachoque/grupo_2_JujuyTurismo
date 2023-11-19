window.addEventListener('load', function(){


let formulario= document.querySelector('form#registro')


formulario.addEventListener('submit',(e)=>{
    e.preventDefault()

let nombre= document.querySelector('input#Nombre')
let apellido= document.querySelector('input#Apellido')
let email= document.querySelector('input#email')
let contraseña= document.querySelector('input#contraseña')
function verificarErrores(){
        let errores=[]

        if(nombre.value==''){
            errores.push('Completá tu nombre')
        }else if(nombre.value.length<=2){
            errores.push('El nombre debe tener almenos 2 caracteres')
        }

        if(apellido.value==''){
            errores.push('Completá tu apellido')
        }else if(apellido.value.length<=2){
            errores.push('El apellido debe tener almenos 2 caracteres')
        }

        if(email.value==''){
            errores.push('Ingresá un email válido')
        }

        if(contraseña.value==''){
            errores.push('Completa tu contraseña')
        }else if(contraseña.value.length>=8){
            errores.push('La contraseña debe tener almenos 8 caracteres')
        }
        return errores
    }

let mensaje= document.querySelector('div.alerta ul')
        mensaje.innerHTML = '' // Limpiar los errores previos

        let errores = verificarErrores()

        if(errores.length>0){
            e.preventDefault()
            for(let i=0;i<errores.length;i++){
                mensaje.innerHTML += '<li>'+errores[i]+'</li>'
            }
        }
/*
let errores=[]


    if(nombre.value==''){
    errores.push('Completá tu nombre')
}else if(nombre.value.length<=2){
errores.push('El nombre debe tener almenos 2 caracteres')
}else{

}


if(apellido.value==''){
    errores.push('Completá tu apellido')
}else if(apellido.value.length<=2){
    errores.push('El apellido debe tener almenos 2 caracteres')
}

if(email.value==''){
    errores.push('Ingresá un email válido')
}

if(contraseña.value==''){
    errores.push('Completa tu contraseña')
}
if(contraseña.value.length>=8){
    errores.push('La contraseña debe tener almenos 8 caracteres')
}

if(errores.length>0){
    e.preventDefault()
    let mensaje= document.querySelector('div.alerta ul')

    for(let i=0;i<errores.length;i++){
        mensaje.innerHTML += '<li>'+errores[i]+'</li>'
    }
}
*/
})
})


