let formulario = document.getElementById('formulario')
let buttonIngresar = document.getElementById('ingresar')
let inputs = document.querySelectorAll('#formulario input') 

//donde se almacenan todos los inputs del formulario, arreglo de todos los inputs


const expresiones = { //define las expresiones  regulares parea validar la contraseña y el correo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

//****************************************************************************************************************************/
const validateCorreo = (e) => {
    switch(e.target.name){
        case "usuario":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('mensajeErrorEmail').textContent = '';
            } else {
                document.getElementById('mensajeErrorEmail').textContent = 'Email no válido';
            }
        break;
    
    }
}// cuando de produce un evento keyup o blur, se valida el correo y muestra el mensaje de error si es necesario

//****************************************************************************************************************************/
const validatePassword = (e) =>{
    if (expresiones.password.test(e.target.value)) {
        document.getElementById('mensajeErrorPassword').textContent = '';
    } else {
        document.getElementById('mensajeErrorPassword').textContent = 'Contraseña no válida';
    }
}


//****************************************************************************************************************************/
//añade eventos para cada input
inputs.forEach((input) => {
    input.addEventListener('keyup', validateCorreo)
    input.addEventListener('blur', validateCorreo)
    input.addEventListener('keyup', validatePassword)
    input.addEventListener('blur', validatePassword)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
});

//****************************************************************************************************************************/
// function irAMenu(){
//     aca va despues lo de enviar la informacion al back para validar y dejar el la sesión iniciada
//     buttonIngresar = window.location.href = './../templates/index.html'
// }






