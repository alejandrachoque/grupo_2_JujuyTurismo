window.addEventListener('load', function(){


    let formulario= document.querySelector('form#logs')
    
    
    formulario.addEventListener('submit',(e)=>{
    
    
    let email= document.querySelector('input#email')
    let contraseña= document.querySelector('input#password')
    function verificarErrores(){
            let errores=[]
    
            if(email.value==''){
                errores.push('Ingresá un email válido')
            }
    
            if(contraseña.value==''){
                errores.push('Completa tu contraseña')
            }else if(contraseña.value.length < 8){
                errores.push('La contraseña debe tener almenos 8 caracteres')
            }
            return errores
        }
    
    let mensaje= document.querySelector('div.alerta ul')
            mensaje.innerHTML = ''
    
            let errores = verificarErrores()
    
            if(errores.length>0){
                e.preventDefault()
                for(let i=0;i<errores.length;i++){
                    mensaje.innerHTML += '<li>'+errores[i]+'</li>'
                }
            }
    })
    })
    
    
    