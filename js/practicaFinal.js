//ejercicio 2
localStorage.setItem("practica", "Práctica Final ECMAScript");
let practica = localStorage.getItem("practica");

console.log("Ejercicio 2 ==> " + practica);


//ejercicio 3
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

console.log("Ejercicio 3 ==> " + " Hora actual: " + horaFormateada());

//ejercicio 4
let mostrarReloj = function () {
    reloj.innerHTML = horaFormateada();
}
let reloj = document.getElementById("reloj");
setInterval(mostrarReloj, 1000);
console.log("Ejercicio 4 ==> " + " Mostrando reloj digital en index.html ");


//ejercicio 5

let header = document.getElementById("encabezado");
let colorInicial = header.style.color;

header.addEventListener("mouseover", function () {
    header.style.color = "#ffff00";
});

header.addEventListener("mouseout", function () {
    header.style.color = colorInicial;
});

console.log("Ejercicio 5 ==> " + "Texto amarillo en el header al pasar el ratón");



//ejercicio 6


// let controlImagen = true;
// let cambiarImagen = function() {
//   if (controlImagen) {
//     imagenOriginal.src = "assets/perro.png";
//   } else {
//     imagenOriginal.src = urlImagenOriginal;
//   }
//   controlImagen = !controlImagen;
// }




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

console.log("Ejercicio 7 ==> " + " Mostrando nombre de las personas ");

/* Leemos archivo con AJAX */
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "assets/personas.json", true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let personas = JSON.parse(this.responseText);
        personas.forEach(function (personas) {
            console.log(personas.name);
        });
    }
}


leerArchivo();

console.log("Este es otro console.log");



//ejercicio 8


class Usuario {
    constructor(nombre, nombreUser, email, empresa, direccion, url) {
        this._nombre = nombre;
        this._nombreUser = nombreUser;
        this._email = email;
        this._empresa = empresa;
        this._direccion = direccion;
        this._url = url;
    }

    get empresa() {
        return this._empresa.nombre;
    }

    static getId(url) {
        var partes = url.split("/");
        var tamanio = partes.length;
        return partes[tamanio - 2];
    }
}

console.log("Ejercicio 8 ==> " + " Creada la clase Usuario ");


//ejercicio 9

console.log("Ejercicio 9 ==> " + " Mostrando datos del objeto userPrueba");

//en la empresa, a parte del nombre, también hemos incluido el sector, para comprobar el funcionamiento de que solo se devuelve el nombre
let direccion = { calle: "Gravina 7", ciudad: "Roma", codigoPostal: "41449" };
let empresa = { nombre: "Leroy Merlin", sector: "Bricolaje" };
let userPrueba = new Usuario("Prueba Practica Final", "PruebaPF7", "jpruebapf7@hotmail.com", empresa, direccion, "https://prueba.dev/api/users/102/");


console.log("nombre: " + userPrueba._nombre);
console.log("nombreUser: " + userPrueba._nombreUser);
console.log("email: " + userPrueba._email);
//ojo, empresa es realmente un metodo, no un atributo
console.log("empresa: " + userPrueba.empresa);
console.log("calle: " + userPrueba._direccion.calle);
console.log("ciudad: " + userPrueba._direccion.ciudad);
console.log("CP: " + userPrueba._direccion.codigoPostal);
console.log("url: " + userPrueba._url);
console.log("idUser: " + Usuario.getId(userPrueba._url));





//ejercicio 10

console.log("Ejercicio 10 ==> " + " Mostrando.................");

//primero, vamos a guardar en una variable uno de los objetos del JSON

const elementoJSON = '{ ' +
    '"name": "Nicholas Runolfsdottir V",' +
    '"username": "Maxime_Nienow",' +
    '"email": "Sherwood@rosamond.me",' +
    '"age": "24",' +
    '"address": {' +
    '  "street": "Ellsworth Summit",' +
    '  "suite": "Suite 729",' +
    '  "city": "Wisokyburgh",' +
    '  "zipcode": "45169",' +
    '  "geo": {' +
    '    "lat": "-14.3990",' +
    '    "lng": "-120.7677"' +
    '  }' +
    '},' +
    '"phone": "586.493.6943 x140",' +
    '"website": "jacynthe.com",' +
    ' "company": {' +
    '  "name": "Abernathy Group",' +
    '  "catchPhrase": "Implemented secondary concept",' +
    '  "bs": "e-enable extensible e-tailers"' +
    ' },' +
    '  "url": "https://prueba.dev/api/users/8/"' +
    '}';

const objetoJSON = JSON.parse(elementoJSON);


crearPersona = function (objetoJSON) {
    let empresa = { nombre: objetoJSON.company.name, sector: objetoJSON.company.catchPhrase };
    let direccion = { nombre: objetoJSON.company.name, sector: objetoJSON.company.catchPhrase };
    let usuario = new Usuario(objetoJSON.nombre, objetoJSON.username, objetoJSON.email, empresa, direccion, "https://prueba.dev/api/users/102/");


}