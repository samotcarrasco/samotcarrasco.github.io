/********************************************************************************
PRÁCTICA ASIGNATURA JAVASCRIPT, CURSO DIM45
   ALUMNO: Tomás Carrasco del Rey

   Nota 1: Para dar más semántica, se ha renombrado el fichero json.js, 
   por el siguiente nombre: personas.json, y se ha ubicado en assets/json/personas.json
   
   Nota 2: A parte de lo requerrido, se ha implementado en javascript (fichero examen.js)
   La carga automática y aleatoria de preguntas para hacer un examen.

   
 ********************************************************************************/


// Funcion utilizada para que el inicio de cada ejercicio se muestre en rojo y negrita por consola

function mostrarInicioEjercicio(ejercicio, cadena) {
    console.log("%cEjercicio " + ejercicio + " ==> " + cadena, "color:red; font-weight: bold;");
}



//ejercicio 2
// Guarde en el almacenamiento local del navegador una propiedad que
// se llame "practica" y que tenga por valor "Práctica Final ECMACScript". Esta variable
// debe borrarse del almacenamiento local cuando se cierre el navegador.

localStorage.setItem("practica", "Práctica Final ECMAScript");
let tituloPractica = localStorage.getItem("practica");

mostrarInicioEjercicio(2, tituloPractica);



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

mostrarInicioEjercicio(3, "Hora actual. Son las: " + horaFormateada());


//ejercicio 4
// En el encabezado de la página principal (en el lugar que considere),
// debe aparecer la hora del sistema, pero debe simular un reloj digital. (Apóyese en la
// expresión de función anónima del ejercicio 3, para ello inserte en el
// documento html el elemento que estime oportuno).


mostrarInicioEjercicio(4, "Mostrando reloj digital en index.html");


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

mostrarInicioEjercicio(5, "Texto amarillo en el header al pasar el ratón");

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

mostrarInicioEjercicio(6, "Modificando imagen al pulsar sobre ella");


let imagen = document.getElementById("imagenRotar");
let controlImagen = true;
let urlImagenOriginal = imagen.src;
let altImagenOriginal = imagen.src;

imagen.addEventListener("click", function () {
    if (controlImagen) {
        //es importante tambien cambiar la propiedad "alt"
        //para que personas con discpacidad visual lo puedan leer
        imagen.src = "assets/perro.png";
        imagen.alt = "perro conduciendo un coche";
    } else {
        imagen.src = urlImagenOriginal;
        imagen.alt = altImagenOriginal
    }
    controlImagen = !controlImagen;
});


// seleccionar las imágenes
// let imagenes = document.querySelectorAll('.imagen1');

// // agregar evento click a cada imagen
// for (let i = 0; i < imagenes.length; i++) {
//     imagenes[i].addEventListener('click', function () {
//         // obtener la ruta de la imagen actual
//         let rutaActual = this.getAttribute('src');
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


// // seleccionar las imágenes
// let imagenes = document.getElementsByClassName('imagenSource');

// // agregar evento click a cada imagen
// for (let i = 0; i < imagenes.length; i++) {
//     console.log("ññññññññññññ");
//     console.log(imagenes[i].srcset);
//     imagenes[i].addEventListener('click', function () {
//         alert("asf");
//         console.log("ññññññññññññyyyyyyyyyyyyy");

//         // obtener la ruta de la imagen actual
//         let rutaActual = this.getAttribute('srcset');
//         console.log("ññññññññññññ" + rutaActual);
//         // si la ruta es la original
//         if (rutaActual === 'assets/autoescuela_grande.jpg') {
//             // cambiar la ruta a la nueva imagen
//             this.setAttribute('srcset', 'assets/perro.png');
//         } else if (rutaActual === 'assets/autoescuela_mediana.jpg') {
//             // cambiar la ruta a la nueva imagen
//             this.setAttribute('srcset', 'assets/perro.png');
//         } else {
//             // si no, cambiar la ruta a la imagen original
//             this.setAttribute('srcset', 'assets/autoescuela_grande.jpg');
//             this.setAttribute('srcset', 'assets/autoescuela_mediana.jpg');
//         }
//     });
// }


//ejercicio 7

mostrarInicioEjercicio(7, "Mostrando nombre de las personas");


let usuarios = JSON.parse(UsuariosJSON);
usuarios.forEach(function (usuario) {
    console.log("\t" + usuario.name);
});




// Estan serían otras formas de leer el fichero, con AJAX (o con fetch)
//de esta forma es asíncrono y no nos interesa, lo dejo comentado.

/* Leemos archivo con AJAX */
/*const xhttp = new XMLHttpRequest();
xhttp.open("GET", "js/json.js", true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let usuarios = JSON.parse(this.responseText);
        usuarios.forEach(function (usuarios) {
            console.log("\t(ejercicio 7) " + usuarios.name);
        });
        AJAXFinalizado = true;
        // lo correcto es cerrar aqué la función. Para que sea la ejecución secuencial se cierran al final del script
    }
}
*/

// otra forma de hacerlo
// fetch('assets/json/personas.json')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.forEach(usuario => {
//             console.log("\t(ejercicio 7)" + usuario.name);
//           });
//     })
//     .catch(error => {
//         console.error('(ejercicio 7) Error al leer el archivo:', error);
//     });





//ejercicio 8
// Cree una clase "Usuario" que contenga, lo siguiente:
// - Propiedades privadas: "idUser", “nombre", "nombreUser", "email", "empresa","direccion" y “url”.
// - la propiedad empresa, sólo devolverá el nombre de dicha empresa.
// - direccion será un objeto literal y deberá contener las siguientes
// propiedades: "calle", "ciudad", "codigoPostal".
// - Método estático getId(url), que pasándole como parámetro el identificador
// único (URI) del usuario, devuelva su id.

mostrarInicioEjercicio(8, "Creando la clase Usuario");

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

mostrarInicioEjercicio(9, "Mostrando datos del objeto userPrueba");


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

mostrarInicioEjercicio(10, "Creando funcion que crea un objecto a partir de un elemento del json");


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

mostrarInicioEjercicio(11, "Creando función que devuelve array de usuarios");

// function obtenerArray() {

//     //variable local
//     let arrayUsuarios = [];

//     /* Leemos archivo con AJAX */
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "assets/json/personas.json", true);
//     xhttp.send();

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let persona = JSON.parse(this.responseText);
//             persona.forEach(function (persona) {
//                 let usuario = crearUsuario(persona);
//                 arrayUsuarios.push(usuario);
//             });
//         }
//         console.log(arrayUsuarios.length)
//         return arrayUsuarios;
//     }
// }

function obtenerArray() {
    //variable local
    let arrayUsuarios = [];
    let usuarios = JSON.parse(UsuariosJSON);
    usuarios.forEach(function (usuario) {
        let user = crearUsuario(usuario);
        arrayUsuarios.push(user);
        //console.log("\tAñadiendo al array al user: " + user._nombre);
    });
    return arrayUsuarios;
}


//ejercicio 12 Cree una variable global que contenga el resultado de la función del
//punto anterior. Muestre por consola SÓLO el nombre del usuario.

mostrarInicioEjercicio(12, "Mostrando array de usuarios desde la variable global");

// variable global
const arrayUsuarios = obtenerArray();
console.log("\tLa longitud del array es: " + arrayUsuarios.length);

//otra forma de recorrer el array
for (let i = 0; i < arrayUsuarios.length; i++) {
    console.log("\t" + arrayUsuarios[i]._nombre);
}

//ejercicio 13
// Cree las variables que considere necesarias, de tal manera que cada
// variable contenga los usuarios de la misma ciudad.
// Hágalo a partir del array de objetos de usuarios del punto anterior. Muestre el
// resultado por consola.

mostrarInicioEjercicio(13, "Creación variables con usuarios de la misma ciudad");

let existeCiudad = false;
let arrayCiudades = [];

//en arrayCiudades guardaremos las ciudades diferentes
for (let i = 0; i < arrayUsuarios.length; i++) {
    arrayCiudades.forEach(function (ciudad) {
        if (ciudad == arrayUsuarios[i]._direccion.ciudad) {
            existeCiudad = true;
        }
    });
    if (!existeCiudad) {
        arrayCiudades.push(arrayUsuarios[i]._direccion.ciudad);
    }
}

//Mostramos las ciudades diferentes que hay
console.log("\tHay ", arrayCiudades.length, "ciudades:");
arrayCiudades.forEach(function (ciudad) {
    console.log("\t- ", ciudad);
});

//el siguiente paso es crear tantos arrays como ciudades hay. 
//cada uno de estos array contendrá las personas que viven en ella

let objeto = {};
arrayCiudades.forEach(function (ciudad) {
    objeto[ciudad] = [];
    arrayUsuarios.forEach(function (usuario) {
        if (usuario._direccion.ciudad == ciudad) {
            objeto[ciudad].push(usuario);
            console.log("\tAñadido el usuario ", usuario._nombre, " a la ciudad ", ciudad)
        }
    });
    //console.log("\tciudad", objeto);
});


//console.log(objeto);

// Ejercicio 14
// Ordene de forma creciente los arrays anteriores por el valor de la
// propiedad "nombre". Muestre el resultado por consola.

mostrarInicioEjercicio(14, "Mostrando arrays ordenados por nombre");

arrayCiudades.forEach(function (ciudad) {
    objeto[ciudad].sort(function (a, b) {
        if (a._nombre > b._nombre) {
          return 1;
        }
        if (a._nombre < b._nombre) {
          return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(objeto[ciudad]);
});




//15 Implemente la función mostrarUsuarios().
// Inserte en la barra de navegación de la página principal de su proyecto, una
// opción que se llame "Usuarios", de tal manera, que cuando el usuario haga click
// sobre ella, se muestre un modal con todos los usuarios ordenados por el valor de
// la propiedad "nombre".
// Diseñe el modal para que aparezcan los siguientes datos de cada usuario:
// Nombre, Usuario, Email y Empresa.

mostrarInicioEjercicio(15, "Insertar modal consulta usuarios");


function mostrarUsuarios() {
    const usuariosOrdenados = usuarios.sort((a, b) => a._nombre.localeCompare(b._nombre));
    let modalContent = "";
    usuariosOrdenados.forEach(usuario => {
        modalContent += `
            <div class="usuario">
                <p>Nombre: ${usuario._nombre}</p>
                <p>Usuario: ${usuario._nombreUser}</p>
                <p>Email: ${usuario._email}</p>
                <p>Empresa: ${usuario._empresa}</p>
            </div>
        `;
    });

    // Mostrar el modal con el contenido generado
    const modal = document.getElementById("modal-usuarios");
    modal.innerHTML = modalContent;
    modal.style.display = "block";
}



const btnUsuarios = document.getElementById("btn-usuarios");
btnUsuarios.addEventListener("click", mostrarUsuarios);

<div id="modal-usuarios" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Empresa</th>
                    </tr>
                </thead>
                <tbody id="modal-content">
                </tbody>
            </table>
        </div>
    </div>




.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w



    //16


    Implemente la función filtrarCiudad().
En el modal del ejercicio anterior, inserte un elemento Select que muestre como
opciones los valores de las ciudades del json.
Cuando el usuario seleccione una ciudad de la lista desplegable, se deberá
actualizar la vista mostrando solamente aquellos que sean de la ciudad
seleccionada.



