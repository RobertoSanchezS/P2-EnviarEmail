document.addEventListener('DOMContentLoaded', function() {
 
    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector(`#email`);
    const inputAsunto = document.querySelector(`#asunto`);
    const inputMensaje = document.querySelector(`#mensaje`);
    
    // asignar eventos 
    inputEmail.addEventListener(`blur`, validar );
    inputAsunto.addEventListener(`blur`, validar );
    inputMensaje.addEventListener(`blur`, validar );

    function validar(e) {
        if(e.target.value.trim() === ``){
           mostarAlerta();
        } else {
           console.log(`si hay algo...`);
        }
    }
    
    function mostrarAlerta() { 
        // generar alerta en HTML 
        const error = document.createElement(`P`);
        error.textContent = `Hubo un Error...`;

        console.log(error);
    }
});