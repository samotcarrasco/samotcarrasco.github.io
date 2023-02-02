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

window.addEventListener("load", function () {
    localStorage.removeItem("practica");
    });
    
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
        imagen.src = "assets/senal_izquierda.png";
        imagen.alt = "Señal dirección obligatoria a la izquierda";
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
    #nombre = "";
    #nombreUser = "";
    #email = "";
    #empresa = "";
    #direccion = "";
    #url = "";

    constructor(nombre, nombreUser, email, empresa, direccion, url) {
        this.#nombre = nombre;
        this.#nombreUser = nombreUser;
        this.#email = email;
        this.#empresa = empresa;
        this.#direccion = direccion;
        this.#url = url;
    }

    //getters
    get nombre() {
        return this.#nombre;
    }
    get nombreUser() {
        return this.#nombreUser;
    }
    get email() {
        return this.#email;
    }
    get empresa() {
        return this.#empresa;
    }
    get direccion() {
        return this.#direccion;
    }
    get url() {
        return this.#url;
    }
    static getId(url) {
        let partes = url.split("/");
        let tamanio = partes.length;
        return partes[tamanio - 2];
    }

    //setters
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    set nombreUser(nombreUser) {
        this.#nombreUser = nombreUser;
    }
    set email(email) {
        this.#email = email;
    }
    set empresa(empresa) {
        this.#empresa = empresa;
    }
    set direccion(direccion) {
        this.#direccion = direccion;
    }
    set url(url) {
        this.#url = url;
    }
}


//ejercicio 9
// Instancie un objeto de la clase Usuario con el identificador
//"userPrueba". Este objeto debe tener los siguientes valores ...

mostrarInicioEjercicio(9, "Mostrando datos del objeto userPrueba");


//en la empresa, a parte del nombre, también hemos incluido el sector, para comprobar el funcionamiento de que solo se devuelve el nombre
let direccionUsuario = { calle: "Gravina 7", ciudad: "Roma", codigoPostal: "41449" };
let userPrueba = new Usuario("Prueba Practica Final", "PruebaPF7", "jpruebapf7@hotmail.com", "Leroy Merlin", direccionUsuario, "https://prueba.dev/api/users/102/");


// userPrueba.nombre = "Prueba Practica Final";
// userPrueba.nombreUser = "PruebaPF7";
// userPrueba.email = "jpruebapf7@hotmail.com";
// userPrueba.empresa = "Leroy Merlin";
// userPrueba.direccion = direccionUsuario;
// userPrueba.url = "https://prueba.dev/api/users/102/";



console.log("\tnombre: " + userPrueba.nombre);
console.log("\tnombreUser: " + userPrueba.nombreUser);
console.log("\temail: " + userPrueba.email);
console.log("\tempresa: " + userPrueba.empresa);
console.log("\tcalle: " + userPrueba.direccion.calle);
console.log("\tciudad: " + userPrueba.direccion.ciudad);
console.log("\tCP: " + userPrueba.direccion.codigoPostal);
console.log("\turl: " + userPrueba.url);
console.log("\tidUser: " + Usuario.getId(userPrueba.url));


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
console.log(usuario.email);


//ejercicio 11 Implemente una función que recorra el JSON y devuelva un array de
//objetos del tipo Usuario. (Apóyese en la función del ejercicio anterior).

mostrarInicioEjercicio(11, "Creando función que devuelve array de usuarios");

function obtenerArray() {
    //variable local
    let arrayUsuarios = [];
    let usuarios = JSON.parse(UsuariosJSON);
    usuarios.forEach(function (usuario) {
        let user = crearUsuario(usuario);
        arrayUsuarios.push(user);
        //console.log("\tAñadiendo al array al user: " + user.nombre);
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
    console.log("\t" + arrayUsuarios[i].nombre);
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
        if (ciudad == arrayUsuarios[i].direccion.ciudad) {
            existeCiudad = true;
        }
    });
    if (!existeCiudad) {
        arrayCiudades.push(arrayUsuarios[i].direccion.ciudad);
    }
}

//Mostramos las ciudades diferentes que hay
console.log("\tHay ", arrayCiudades.length, "ciudades:");
arrayCiudades.forEach(function (ciudad) {
    console.log("\t- ", ciudad);
});

//el siguiente paso es crear tantos arrays como ciudades hay. 
//cada uno de estos array contendrá las personas que viven en ella

let objetosCiudad = {};
arrayCiudades.forEach(function (ciudad) {
    objetosCiudad[ciudad] = [];
    arrayUsuarios.forEach(function (usuario) {
        if (usuario.direccion.ciudad == ciudad) {
            objetosCiudad[ciudad].push(usuario);
            console.log("\tAñadido el usuario ", usuario.nombre, " a la ciudad ", ciudad)
        }
    });
    //console.log("\tciudad", objetosCiudad);
});


//console.log(objetosCiudad);

// Ejercicio 14
// Ordene de forma creciente los arrays anteriores por el valor de la
// propiedad "nombre". Muestre el resultado por consola.

mostrarInicioEjercicio(14, "Mostrando arrays ordenados por nombre");

arrayCiudades.forEach(function (ciudad) {
    objetosCiudad[ciudad].sort(function (a, b) {
        if (a.nombre > b.nombre) {
            return 1;
        }
        if (a.nombre < b.nombre) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(objetosCiudad[ciudad]);
});




//15 Implemente la función mostrarUsuarios().
// Inserte en la barra de navegación de la página principal de su proyecto, una
// opción que se llame "Usuarios", de tal manera, que cuando el usuario haga click
// sobre ella, se muestre un modal con todos los usuarios ordenados por el valor de
// la propiedad "nombre".
// Diseñe el modal para que aparezcan los siguientes datos de cada usuario:
// Nombre, Usuario, Email y Empresa.

mostrarInicioEjercicio(15, "Insertar modal consulta usuarios. Menú Gestion Uuarios -> consulta ");

//declaramos la variable global porque vamos a utilizarla después de la función
let modal = "";


function mostrarUsuarios() {
    modal = `<div class="modal" tabindex="-1" id="modalUsuarios">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">
                <b>Consulta de usuarios</b>
                </h5>
                </div>
                <div id="modalBusqueda">
                </div>
                <div class="modal-body">
                <table id="tablaModal">
                <th>Nombre</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Empresa</th>
                `;

    //en este caso, utilizamos una lambda para ordenar
    //añadimos el atributo id=nommbreUser para posteriormente poderlos filtrar, por ejemplo
    //añadimos class=ciudad para controlar el color con css
    const usuariosOrdenados = arrayUsuarios.sort((a, b) => a.nombre.localeCompare(b.nombre));
    usuariosOrdenados.forEach(usuario => {
        modal += `
                <tr class="usuarioTabla ${usuario.direccion.ciudad}" id=${usuario.nombreUser}>
                <td>${usuario.nombre}</td>
                <td>${usuario.nombreUser}</td>
                <td>${usuario.email}</td>
                <td>${usuario.empresa}</td>
                </tr>`;
    });
    modal += `
                </table>
                </div>
                <div class="modal-footer" id="modalFooter">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
            </div>
           </div>`;

    document.body.insertAdjacentHTML("beforeend", modal);


}

mostrarUsuarios();




//  16   Implemente la función filtrarCiudad().
// En el modal del ejercicio anterior, inserte un elemento Select que muestre como
// opciones los valores de las ciudades del json.
// Cuando el usuario seleccione una ciudad de la lista desplegable, se deberá
// actualizar la vista mostrando solamente aquellos que sean de la ciudad
// seleccionada.

mostrarInicioEjercicio(16, "Funcion filtrarCiudad() ");


let padreFooter = document.getElementById("modalBusqueda");

let hijo = document.createElement('select');
hijo.setAttribute("id", "selectorCiudad");
hijo.classList.add("form-control", "custom-select", "d-block", "w-100");
//utilziamos forEach para recorrer las ciudades
hijo.innerHTML += `<option value="todas">Seleccione una ciudad</option>`;
arrayCiudades.forEach(function (ciudad) {
    hijo.innerHTML += `<option value="${ciudad}">${ciudad}</option>`;
});

padreFooter.appendChild(hijo);




const filtroCiudades = document.getElementById("selectorCiudad");
onchange = function () { filtarPorciudad(filtroCiudades.value) };


function filtarPorciudad(ciudad) {
    console.log("filtrando usuarios de la ciudad", ciudad);
    //eliminanos todos los registros de la tabla y mostramso solamente los que cumplen el filtro
    const usuariosMostrados = document.getElementsByClassName("usuarioTabla");

    while (usuariosMostrados.length > 0) {
        usuariosMostrados[0].parentNode.removeChild(usuariosMostrados[0]);
        // usuariosMostrados[0].removeChild(usuariosMostrados[0]);
        // usuariosMostrados[0].remove;
    }
    let tablaModal = document.getElementById("tablaModal");
    if (ciudad != "todas") {
        //utlizamos los arrays de ciudades del ejercicio 13 y 14
        for (var i = 0; i < objetosCiudad[ciudad].length; i++) {
            var usuario = objetosCiudad[ciudad][i];
            var elementoTabla = `<tr class="usuarioTabla ${ciudad}" id=${usuario.nombreUser}>
            <td>${usuario.nombre}</td>
            <td>${usuario.nombreUser}</td>
            <td>${usuario.email}</td>
            <td>"${usuario.empresa}</td>
            </tr>`;
            tablaModal.insertAdjacentHTML("beforeend", elementoTabla);
            //tablaModal.insertAdjacentElement(elementoTabla);
        }
    }
    else {
        arrayUsuarios.forEach(function (usuario) {
            var elementoTabla = `
              <tr class="usuarioTabla ${usuario.direccion.ciudad}" id=${usuario.nombreUser}>
              <td>${usuario.nombre}</td>
              <td>${usuario.nombreUser}</td>
              <td>${usuario.email}</td>
              <td>${usuario.empresa}</td>
              </tr>`;
            tablaModal.insertAdjacentHTML("beforeend", elementoTabla);
               });
    }
}



// 17. Modifique la función del ejercicio 15, para que cambie el color del texto
// de los usuarios mostrados en función de la ciudad del usuario:
// Gwenborough, color = azul
// Wisokyburgh, color = verde

mostrarInicioEjercicio(17, "Function color texto dependiendo de la ciudad");

//hemos añadido class con el nombre de cada ciudad y controlamos el color con css
