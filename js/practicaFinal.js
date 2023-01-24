/********************************************************************************
PRÁCTICA ASIGNATURA JAVASCRIPT, CURSO DIM45
   ALUMNO: Tomás Carrasco del Rey

   Nota 1: Para dar más semántica, se ha renombrado el fichero json.js, 
   por el siguiente nombre: personas.json, y se ha ubicado en assets/json/personas.json
   
   Nota 2: A parte de lo requerrido, se ha implementado en javascript (fichero examen.js)
   La carga automática y aleatoria de preguntas para hacer un examen.

   
 ********************************************************************************/


  // Funcion utilizada para que el inicio de cada ejercicio se muestre en rojo y negrita por consola

   function mostrarInicioEjercicio(ejercicio,cadena){
    console.log("%cEjercicio "+ejercicio+" ==> " + cadena,"color:red; font-weight: bold;");
}



//ejercicio 2
// Guarde en el almacenamiento local del navegador una propiedad que
// se llame "practica" y que tenga por valor "Práctica Final ECMACScript". Esta variable
// debe borrarse del almacenamiento local cuando se cierre el navegador.

localStorage.setItem("practica", "Práctica Final ECMAScript");
let tituloPractica = localStorage.getItem("practica");

mostrarInicioEjercicio(2,tituloPractica);



//ejercicio 3
// Implemente una expresión de función anónima que devuelva la hora
// del sistema en formato HH:MM:SS


let horaFormateada = function () {
    let hoy = new Date();
    let hh = hoy.getHours();
    let mm = hoy.getMinutes();
    let ss = hoy.getSeconds();
    //controlamos que los segundos de 1 a 9 se muestren con 0 delante
    if (ss < 10) { ss = "0" + ss }
    if (mm < 10) { mm = "0" + mm }
    if (hh < 10) { hh = "0" + hh }

    return `${hh}:${mm}:${ss}`;
}

mostrarInicioEjercicio(3,"Hora actual. Son las: " + horaFormateada());


//ejercicio 4
// En el encabezado de la página principal (en el lugar que considere),
// debe aparecer la hora del sistema, pero debe simular un reloj digital. (Apóyese en la
// expresión de función anónima del ejercicio 3, para ello inserte en el
// documento html el elemento que estime oportuno).


mostrarInicioEjercicio(4,"Mostrando reloj digital en index.html");


let mostrarReloj = function () {
    reloj.innerHTML = horaFormateada();
}
let reloj = document.getElementById("reloj");
setInterval(mostrarReloj, 1000);

//ejercicio 5
// Modifique el texto del “enunciado principal / título” que aparezca en el
// encabezado de la página principal de su proyecto, de tal manera que cuando el
// puntero del ratón se sitúe encima, dicho texto debe aparecer con un color amarillo
// "#ffff00".
// Y cuando el puntero salga del elemento, el color del texto debe cambiar al
// original que tenía.

mostrarInicioEjercicio(5,"Texto amarillo en el header al pasar el ratón");

let header = document.getElementById("encabezado");
let colorInicial = header.style.color;

header.addEventListener("mouseover", function () {
    header.style.color = "#ffff00";
});

header.addEventListener("mouseout", function () {
    header.style.color = colorInicial;
});


//ejercicio 6
// Modifique una imagen que aparezca en cualquier documento html de
// su proyecto, de tal manera que cada vez que haga click sobre ella, la sustituya por
// otra imagen de su elección, es decir, la primera vez, cuando haga click, debe
// cambiar a "imagen2", la siguiente vez que haga click, a la anterior "imagen1" y así
// sucesivamente...

// let controlImagen = true;
// let cambiarImagen = function() {
//   if (controlImagen) {
//     imagenOriginal.src = "assets/perro.png";
//   } else {
//     imagenOriginal.src = urlImagenOriginal;
//   }
//   controlImagen = !controlImagen;
// }

mostrarInicioEjercicio(6,"Modificando imagen al pulsar sobre ella");



// let imagenes = document.getElementsByClassName("imagenSource");

// for(let el of imagenes) {
//     let urlImagenOriginal = el.srcset;
//     console.log(urlImagenOriginal);

//     let isImage1 = true;

//     el.addEventListener("click", function() {
//     if (isImage1) {
//         el.srcset = "assets/perro.png";
//     } else {
//         el.srcset = urlImagenOriginal;
//     }
//     isImage1 = !isImage1;
// });
// }


// let myImage = document.getElementById("imagenP");
// let isImage1 = true;
// let urlImagenOriginal = myImage.src;

// myImage.addEventListener("click", function() {
//   if (isImage1) {
//     myImage.src = "assets/perro.png";
//   } else {
//     myImage.src = urlImagenOriginal;
//   }
//   isImage1 = !isImage1;
// });


// seleccionar las imágenes
// var imagenes = document.querySelectorAll('.imagen1');

// // agregar evento click a cada imagen
// for (var i = 0; i < imagenes.length; i++) {
//     imagenes[i].addEventListener('click', function () {
//         // obtener la ruta de la imagen actual
//         var rutaActual = this.getAttribute('src');
//         // si la ruta es la original
//         if (rutaActual === 'assets/autoescuela_pequenia.jpg') {
//             // cambiar la ruta a la nueva imagen
//             this.setAttribute('src', 'ruta/de/la/nueva/imagen.jpg');
//         } else {
//             // si no, cambiar la ruta a la imagen original
//             this.setAttribute('src', 'assets/autoescuela_pequenia.jpg');
//         }
//     });
// }


// seleccionar las imágenes
var imagenes = document.getElementsByClassName('imagenSource');

// agregar evento click a cada imagen
for (var i = 0; i < imagenes.length; i++) {
    console.log("ññññññññññññ");
    console.log(imagenes[i].srcset);
    imagenes[i].addEventListener('click', function () {
        alert("asf");
        console.log("ññññññññññññyyyyyyyyyyyyy");

        // obtener la ruta de la imagen actual
        var rutaActual = this.getAttribute('srcset');
        console.log("ññññññññññññ" + rutaActual);
        // si la ruta es la original
        if (rutaActual === 'assets/autoescuela_grande.jpg') {
            // cambiar la ruta a la nueva imagen
            this.setAttribute('srcset', 'assets/perro.png');
        } else if (rutaActual === 'assets/autoescuela_mediana.jpg') {
            // cambiar la ruta a la nueva imagen
            this.setAttribute('srcset', 'assets/perro.png');
        } else {
            // si no, cambiar la ruta a la imagen original
            this.setAttribute('srcset', 'assets/autoescuela_grande.jpg');
            this.setAttribute('srcset', 'assets/autoescuela_mediana.jpg');
        }
    });
}


//ejercicio 7

mostrarInicioEjercicio(7,"Mostrando nombre de las personas");
mostrarInicioEjercicio(7,"AJAX es asíncrono, se mostrarán los resultados al final");

/* Leemos archivo con AJAX */
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "assets/json/personas.json", true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let usuarios = JSON.parse(this.responseText);
        usuarios.forEach(function (usuarios) {
            console.log("\t(ejercicio 7) "+ usuarios.name);
        });
    }
}


//ejercicio 8
// Cree una clase "Usuario" que contenga, lo siguiente:
// - Propiedades privadas: "idUser", “nombre", "nombreUser", "email", "empresa","direccion" y “url”.
// - la propiedad empresa, sólo devolverá el nombre de dicha empresa.
// - direccion será un objeto literal y deberá contener las siguientes
// propiedades: "calle", "ciudad", "codigoPostal".
// - Método estático getId(url), que pasándole como parámetro el identificador
// único (URI) del usuario, devuelva su id.

mostrarInicioEjercicio(8,"Creando la clase Usuario");

//esta linea se puede obviar, ya que en este ejercicio no se va a crear el objeto
let direccion = { calle: "", ciudad: "", codigoPostal: "" };


class Usuario {
    constructor(nombre, nombreUser, email, empresa, direccion, url) {
        this._nombre = nombre;
        this._nombreUser = nombreUser;
        this._email = email;
        this._empresa = empresa;
        this._direccion = direccion;
        this._url = url;
    }

    static getId(url) {
        let partes = url.split("/");
        let tamanio = partes.length;
        return partes[tamanio - 2];
    }
}



//ejercicio 9
// Instancie un objeto de la clase Usuario con el identificador
//"userPrueba". Este objeto debe tener los siguientes valores ...

mostrarInicioEjercicio(9,"Mostrando datos del objeto userPrueba");


//en la empresa, a parte del nombre, también hemos incluido el sector, para comprobar el funcionamiento de que solo se devuelve el nombre
let direccion2 = { calle: "Gravina 7", ciudad: "Roma", codigoPostal: "41449" };
let userPrueba = new Usuario("Prueba Practica Final", "PruebaPF7", "jpruebapf7@hotmail.com", "Leroy Merlin", direccion2, "https://prueba.dev/api/users/102/");


console.log("\tnombre: " + userPrueba._nombre);
console.log("\tnombreUser: " + userPrueba._nombreUser);
console.log("\temail: " + userPrueba._email);
console.log("\tempresa: " + userPrueba._empresa);
console.log("\tcalle: " + userPrueba._direccion.calle);
console.log("\tciudad: " + userPrueba._direccion.ciudad);
console.log("\tCP: " + userPrueba._direccion.codigoPostal);
console.log("\turl: " + userPrueba._url);
console.log("\tidUser: " + Usuario.getId(userPrueba._url));


//Ejercicio 10. Implemente una función que pasándole como parámetro un objeto del
//json mapee y cree un objeto del tipo Usuario.

mostrarInicioEjercicio(10,"Creando funcion que crea un objecto a partir de un elemento del json");


crearUsuario = function (objetoJSON) {
    let nombre = objetoJSON.name;
    let nombreUser = objetoJSON.username;
    let email = objetoJSON.email;
    let empresa = objetoJSON.company.name;
    let direccion = { calle: objetoJSON.address.street, ciudad: objetoJSON.address.city, codigoPostal: objetoJSON.address.zipcode };
    let url = objetoJSON.url;
    let usuario = new Usuario(nombre, nombreUser, email, empresa, direccion, url);
    return usuario;
}

//Pra probar el funcionamiento, vamos a guardar en una variable uno de los objetos del JSON


let elementoJSON = '{ ' +
'"name": "Nicholas Runolfsdottir V",' +
'"username": "Maxime_Nienow",' +
'"email": "Sherwood@rosamond.me",' +
'"age": "24",' +
'"address": {"street": "Ellsworth Summit","suite": "Suite 729", "city": "Wisokyburgh","zipcode": "45169","geo":{"lat": "-14.3990","lng": "-120.7677"}},' +
'"phone": "586.493.6943 x140",' +
'"website": "jacynthe.com",' +
' "company": { "name": "Abernathy Group",  "catchPhrase": "Implemented secondary concept", "bs": "e-enable extensible e-tailers" },' +
'  "url": "https://prueba.dev/api/users/8/"' +
'}';

let usuarioJSON = JSON.parse(elementoJSON);

let usuario = crearUsuario(usuarioJSON);
console.log("Mostramos, por ejemplo, el email del usuario: ");
console.log(usuario._email);



//ejercicio 11 Implemente una función que recorra el JSON y devuelva un array de
//objetos del tipo Usuario. (Apóyese en la función del ejercicio anterior).

mostrarInicioEjercicio(11,"Creando función que devuelve array de usuarios");

function obtenerArray() {

    let arrayUsuarios = [];

    /* Leemos archivo con AJAX */
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "assets/json/personas.json", true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let persona = JSON.parse(this.responseText);
            persona.forEach(function (persona) {
                let usuario = crearUsuario(persona);
                arrayUsuarios.push(usuario);
            });
        }
    }
    return arrayUsuarios;
}


//ejercicio 12 Cree una variable global que contenga el resultado de la función del
//punto anterior. Muestre por consola SÓLO el nombre del usuario.


mostrarInicioEjercicio(12,"Mostrando nombre del array de usuarios");

let arrayUsuarios = [];
arrayUsuarios = obtenerArray();

console.log(arrayUsuarios.length);

for (let i = 0; i < arrayUsuarios.length; i++) {
    console.log("sfasfdasfdds" + arrayUsuarios[i]._name);
}



//ejercicio 13

mostrarInicioEjercicio(1,"Ejercicio13");

