window.addEventListener('load', function(){


    let formulario= document.querySelector('form#producto')
    
    
    formulario.addEventListener('submit',(e)=>{
        //e.preventDefault() // estaba el prevent aplicado y no mandaba el form
    
    let firstName= document.querySelector('input#FirstName')
    let firstDescription= document.querySelector('input#FirstDescription')
    let description= document.querySelector('input#Description')
    let price= document.querySelector('input#Price')
    let link= document.querySelector('input#Link')
    let imagen= document.querySelector('input#Imagen')
    function verificarErrores(){
            let errores=[]
    
            if(firstName.value==''){
                errores.push('Completá el nombre del producto')
            }else if(firstName.value.length<=5){
                errores.push('El nombre debe tener mas de 5 caracteres')
            }
    
            if(firstDescription.value==''){
                errores.push('Completá el enunciado')
            }else if(firstDescription.value.length<=10){
                errores.push('Debe contar con mas de 10 caracteres')
            }
    
            if(description.value==''){
                errores.push('Completa la descripcion')
            }else if(description.value.length<=10){
                errores.push('Debe contar con mas de 10 caracteres')
            }
    
            if(price.value==''){
                errores.push('Completa el precio')
            }

            if(link.value==''){
                errores.push('Completá el link')
            }

            if(imagen.value==''){
                errores.push('Completá la imagen')
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
    
    
    