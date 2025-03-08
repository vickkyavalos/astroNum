let formulario = document.getElementById('formulario')
let inputs = document.querySelectorAll('#formulario input') 
//donde se almacenan todos los inputs del formulario, arreglo de todos los inputs


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

//****************************************************************************************************************************/
const validateForm = (e) => {
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
        case "contrasena":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('mensajeErrorPassword').textContent = '';
            } else {
                document.getElementById('mensajeErrorPassword').textContent = 'Contraseña no válida';
            }
        break;
        case "email":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('mensajeErrorEmail').textContent = '';
            } else {
                document.getElementById('mensajeErrorEmail').textContent = 'Correo no válido';
            }
        break;
    }
}
//****************************************************************************************************************************/
const validarPass = (e) => {
    let pass = document.getElementById('contrasena').value;
    let pass2 = document.getElementById('contrasena2').value;
    if (pass && pass2) {
        if (pass !== pass2) {
            document.getElementById('mensajeErrorPassword2').textContent = 'Las contraseñas no coinciden';
        } else {
            document.getElementById('mensajeErrorPassword2').textContent = '';
        }
    } else {
        document.getElementById('mensajeErrorPassword2').textContent = '';
    }
}

//****************************************************************************************************************************/
//añade eventos para cada input
inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm, validarPass);
    input.addEventListener('blur', validateForm, validarPass);

	if (input.name === 'contrasena' || input.name === 'contrasena2') {
        input.addEventListener('keyup', validarPass);
        input.addEventListener('blur', validarPass);
    }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
});

