// Validation Form
console.log('Validation Form');
function validarFormContacto(){
  //Asignamos los valores de los inputs a variables

  // event.preventDefault();
  console.log('dentro de la función')
  
  const inputName = document.getElementById('inputName');
  const inputEmail = document.getElementById('inputEmail');
  const inputMessage = document.getElementById('inputMessage');

  // Si el input está vacío lanza alerta de error

  if (inputName.value =="" || inputName.value.length == 0) {
    alert("Debes ingresar tu nombre");
    inputName.focus();
  } else if (inputEmail.value =="" || inputEmail.value.length == 0) {
    alert("Debes ingresar tu Email");
    inputEmail.focus();
  } else if (inputMessage.value =="" || inputMessage.value.length == 0) {
    alert("Debes ingresar un mensaje");
    inputMessage.focus();
  } else {
    alert("¡¡¡Mensaje enviado con éxito!!! Gracias por contactarnos");
  }
}
