const formulario = document.querySelector('formulario');
const nombre = document.querySelector('nombre');
const mensaje = document.querySelector('mensaje');
const enviar = document.querySelector('enviar');
const errores = document.querySelector('errores');
let mensajesErrores = [];

// Funciones
function validar (evento) {
    // Evitar que se envie el formulario
    evento.preventDefault();

    // Vacia los mensajesErrores antes de rellenarlo nuevamente
    mensajesErrores = [];

    // VALIDACIONES

    // Nombre es obligatorio

    if (nombre.value.trim().length === 0) {
        mensajesErrores = mensajesErrores.concat('Nombre es un campo obligatorio');
    }

    // Nombre carácteres válidos

    if (!/^[a-zA-Z0-9]*$/.exec(nombre.value.trim())) {
        mensajesErrores = mensajesErrores.concat('Nombre no tiene carácteres válidos');
    }



    // Comprobamos que el mensaje tiene un mínimo de 10 carácteres

    if (mensaje.value.trim().length < 10) {
        mensajesErrores = mensajesErrores.concat('Mensaje demasiado corto');
    }

    // ENVIAR O MOSTRAR MENSAJES
    if (mensajesErrores.length === 0) {
        // Enviamos el formulario si no hay errores
        formulario.submit();
    } else {
        // Muestro los errores
        errores.textContent = '';
        mensajesErrores.forEach(function (mensaje) {
            const miLi = document.createElement('li');
            miLi.textContent = mensaje;
            errores.appendChild(miLi);
        });
    }
}

// Eventos
formulario.addEventListener('submit', validar);

// Inicio