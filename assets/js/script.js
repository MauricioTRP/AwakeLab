// Validation Form

//Asignamos los valores de los inputs a variables
const inputName = document.getElementById('inputName').value;
const inputEmail = document.getElementById('inputEmail').value;
const inputMessage = document.getElementById('inputMessage').value;


function validarFormContacto(){

    //Si el input esta vacio lanza alerta de error
    if (inputName == null || inputName.length == 0) {
      alert('ATENCIÓN: DEBE INGRESAR SU NOMBRE');
        return false;
    }
  
    if (inputEmail == null || inputEmail.length == 0 ) {
        alert('ATENCIÓN: DEBE INGRESAR CORREO ELECTRONICO');
        return false;
    }
  
    if (inputMessage == null || inputMessage.length == 0 ) {
        alert('ATENCIÓN: DEBE INGRESAR MENSAJE A ENVIAR');
        return false;
    }

    //si nonguno de los campos esta vacio muestra alerta de exito
    alert('MENSAJE ENVIADO CON EXITO!!! GRACIAS POR CONTACTARNOS');
    return true;
  }
