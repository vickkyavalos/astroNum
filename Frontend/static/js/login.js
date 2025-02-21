let formulario = document.getElementById('formulario')
let inputs = document.querySelectorAll('#formulario input') 
//donde se almacenan todos los inputs del formulario, arreglo de todos los inputs


const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validateForm = (e) => {
    switch(e.target.name){
        case "usuario":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('mensajeErrorEmail').textContent = '';
            } else {
                document.getElementById('mensajeErrorEmail').textContent = 'Email no válido';
            }
        break;
        case "contrasena":
            
        break;
    
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm)
    input.addEventListener('blur', validateForm)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
});








