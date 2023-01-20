
/* Este fichero javascript se ha implementado para poder realizar correctamente la siguiente funcionalidad:
El botón de envío NO se activará hasta que se hayan validado correctamente todos los elementos del formulario.

Tiene  en cuenta que el texto no sea vacío y que tenga el mínimo de caracteres requerido en cada campo

*/


let elementos = document.getElementsByClassName('obligatorio')

    for(let el of elementos) {
      el.addEventListener("keyup", habilitarBoton)
    }



/* Funcion utilizada en los formularos de alta de pregunta y alta de usuario*/
function habilitarBoton() {

  let inputs = document.getElementsByClassName('obligatorio');
  let btn = document.getElementById("enviar");

  let isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    let texto = inputs[i];
    if (texto.value.trim() === "" || texto.value === null || texto.value.length < texto.getAttribute('minlength')) {
      isValid = false;
      break;
    }
  }
  if (isValid === true) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }

}


/* Funcion utilizada en el formulario de login (desde la barra de navegación*/


let elementosLogin = document.getElementsByClassName('obligatorioL')

    for(let el of elementosLogin) {
      el.addEventListener("keyup", habilitarBotonLogin)
    }


function habilitarBotonLogin() {

  let inputs = document.getElementsByClassName('obligatorioL');
  let btn = document.getElementById("enviarLogin");

  let isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    let texto = inputs[i];
    if (texto.value.trim() === "" || texto.value === null) {

      isValid = false;
      break;
    }
  }
  if (isValid === true) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }

}


// en todos los formularios que tienen el boton "Limpiar datos" 
// al pulsar en el, se deshabilita el boton "enviar"
document.getElementById("borrar").addEventListener("click", myFunction);

function myFunction() {
  let btn = document.getElementById("enviar");
  btn.disabled = true;
}



/*

otra forma de hacerlo, a parte de controlar el numero minimo de caracters de cada 
campo del formulario, tambien se validaría el formato (ej: email)... (no he consesuido que funcione)

https://getbootstrap.com/docs/5.0/forms/validation/


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
 
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
 
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
 
        form.classList.add('was-validated')
      }, false)
    })
})()

*/