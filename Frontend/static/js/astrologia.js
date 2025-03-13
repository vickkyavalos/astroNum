let formulario = document.getElementById('formulario');
let fecha = document.getElementById('fecha');
let hora = document.getElementById('hora');
let inputs = formulario.querySelectorAll('input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

function validateForm (e) {
    let fechaActual = new Date();
    let fechaIngresada = new Date(fecha.value);

    switch(e.target.name){
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('mensajeErrorUser').textContent = '';
            } else {
                document.getElementById('mensajeErrorUser').textContent = 'Nombre no válido';
            }
        break;
        case "apellido":
            if (expresiones.apellido.test(e.target.value)) {
                document.getElementById('mensajeErrorApellido').textContent = '';
            } else {
                document.getElementById('mensajeErrorApellido').textContent = 'Apellido no válido';
            }
        break;
        case "fecha":
            if (!fecha.value) {
                document.getElementById('mensajeErrorFecha').textContent = "Debes ingresar una fecha de nacimiento.";
            } else if (fechaIngresada > fechaActual) {
                document.getElementById('mensajeErrorFecha').textContent = "La fecha no puede ser en el futuro.";
            } else {
                document.getElementById('mensajeErrorFecha').textContent = '';
            }
        break;
        case "hora":
            if (!hora.value) {
                document.getElementById('mensajeErrorHora').textContent = "Debes ingresar la hora de nacimiento.";
            } else {
                document.getElementById('mensajeErrorHora').textContent = '';
            }
    }
}

// añade eventos para cada input
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});