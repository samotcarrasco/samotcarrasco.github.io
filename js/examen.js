
/* Este fichero javascript.....
*/



/* Leemos archivo con AJAX */
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "assets/json/preguntas.json", true);
xhttp.send();

//en este array guardaremos todas las preguntas que se han generado, para posteriormente hacer el calculo del resultado
let preguntas = [];

//en este array guardaremos todas las respuestas que ha seleccionado el usuario en cada pregunta
let respuestas = [];

//variable global con el número de preguntas que tendrá el examen
let numPreguntas = 10;

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        console.log(datos);
        let preguntasTotalesJson = datos.preguntas.length;
        console.log("preguntas JSON -> ", preguntasTotalesJson);
        //resto de código

        //guardamos en un array numeros aletorios sin repetir
        let randoms = [];
        while (randoms.length < preguntasTotalesJson) {
            let random = Math.floor(Math.random() * preguntasTotalesJson) + 1;
            if (randoms.indexOf(random) == -1) {
                randoms.push(random);
            }
        }


        console.log("order aleaotiro de lectura de preguntas: " + randoms);
        //en contador guardamos el numero de preguntas que se han generado
        let contador = 1;

        let asignadas = [];
        do {

            let aleatorio = randoms[contador - 1];
            console.log("---------------" + aleatorio);

            console.log("Generando pregunta " + contador + " leida pregunta de tipo: " + datos.preguntas[aleatorio - 1].tipo);
            //los id de las preguntas son: p1, p2, p3 .......
            console.log("ID PREGUNTA LEIDA: " + datos.preguntas[aleatorio - 1].id);
            console.log("CONTADOR: " + contador)


            let aleatorio2 = aleatorio;
            const id = datos.preguntas[aleatorio2 - 1].id;
            const enunciado = datos.preguntas[aleatorio2 - 1].enunciado;
            const opciones = [datos.preguntas[aleatorio2 - 1].opciones.opc1,
            datos.preguntas[aleatorio2 - 1].opciones.opc2,
            datos.preguntas[aleatorio2 - 1].opciones.opc3,
            datos.preguntas[aleatorio2 - 1].opciones.opc4];
            let tipo = datos.preguntas[aleatorio2 - 1].tipo;
            let imagen = datos.preguntas[aleatorio2 - 1].imagen;
            let correcta = datos.preguntas[aleatorio2 - 1].correcta;
            const preguntaObj = new Pregunta(id, enunciado, opciones, tipo, imagen, correcta);

            console.log(" Generada pregunta" + preguntaObj.id);

            anadirPreguntaHTML(preguntaObj, contador);
            preguntas[contador - 1] = preguntaObj;

            contador++;

        } while (contador <= numPreguntas);

    }

}

//constructor de los objetos Pregunta
function Pregunta(id, enunciado, opciones = [], tipo, imagen, correcta) {
    this.id = id;
    this.enunciado = enunciado;
    this.opciones = opciones;
    this.tipo = tipo;
    this.imagen = imagen;
    this.correcta = correcta;
}

function anadirPreguntaHTML(preguntaObj, contador) {
    let codigoHtml = "";
    switch (preguntaObj.tipo) {
        case "larga":
            codigoHtml = `<form class="row g-2" id="f${preguntaObj.id}"> <article class="col-12"> 
            <p class="larga fw-bold mt-3" id="p${contador}">${contador}.-${preguntaObj.enunciado}</p> 
            <div class="row"> 
            <div class="col-md-12"> <input type="radio" name="box" id="p${contador}r1">  
            <label for="p${contador}r1" class="box p${contador}r1 w-100">  
            <div class="course"> <span class="circle"></span> <span  id="p${contador}opc1">${preguntaObj.opciones[0]}</span> </div> </label> </div> 
            <div class="col-md-12"> <input type="radio" name="box" id="p${contador}r2">  
            <label for="p${contador}r2" class="box p${contador}r2 w-100">  
            <div class="course"> <span class="circle"></span> <span  id="p${contador}opc2">${preguntaObj.opciones[1]}</span> </div> </label> </div> 
            <div class="col-md-12"> <input type="radio" name="box" id="p${contador}r3">  
            <label for="p${contador}r3" class="box p${contador}r3 w-100">  
            <div class="course"> <span class="circle"></span> <span  id="p${contador}opc3">${preguntaObj.opciones[2]}</span> </div> </label> </div> 
            <div class="col-md-12"> <input type="radio" name="box" id="p${contador}r4">  
            <label for="p${contador}r4" class="box p${contador}r4 w-100">  
            <div class="course"> <span class="circle"></span> <span  id="p${contador}opc4">${preguntaObj.opciones[3]}</span> </div> </label> </div> 
            </article> 
            </form>`;

            break;
        case "corta":

            codigoHtml = `<form class="row g-2" id="f${preguntaObj.id}"> <article class="col-12"> 
                <p class="corta fw-bold mt-3" id="p${contador}">${contador}.-${preguntaObj.enunciado}</p> 
                <div class="row"> 
                <div class="col-md-6"> <input type="radio" name="box" id="p${contador}r1">  
                <label for="p${contador}r1" class="box p${contador}r1 w-100">  
                <div class="course"> <span class="circle"></span> <span  id="p${contador}opc1">${preguntaObj.opciones[0]}</span> </div> </label> </div> 
                <div class="col-md-6"> <input type="radio" name="box" id="p${contador}r2">  
                <label for="p${contador}r2" class="box p${contador}r2 w-100">  
                <div class="course"> <span class="circle"></span> <span  id="p${contador}opc2">${preguntaObj.opciones[1]}</span> </div> </label> </div> 
                <div class="col-md-6"> <input type="radio" name="box" id="p${contador}r3">  
                <label for="p${contador}r3" class="box p${contador}r3 w-100">  
                <div class="course"> <span class="circle"></span> <span  id="p${contador}opc3">${preguntaObj.opciones[2]}</span> </div> </label> </div> 
                <div class="col-md-6"> <input type="radio" name="box" id="p${contador}r4">  
                <label for="p${contador}r4" class="box p${contador}r4 w-100">  
                <div class="course"> <span class="circle"></span> <span  id="p${contador}opc4">${preguntaObj.opciones[3]}</span> </div> </label> </div> 
                </article> 
                </form>`;
            break;
        case "imagen":
            codigoHtml = `<form class="row g-2" id="f${preguntaObj.id}"> <article class="col-sm-6">  
                <p class="imagen fw-bold mt-3" id="p${contador}">${contador}.-${preguntaObj.enunciado}</p> 
                <section> 
                <input type="radio" name="box" id="p${contador}r1">  
                <label for="p${contador}r1" class="box p${contador}r1 w-100">  
                <div class="course"> 
                <span class="circle"></span> <span id="p${contador}opc1">${preguntaObj.opciones[0]}</span> 
                </div></label></section> 
                <section> 
                <input type="radio" name="box" id="p${contador}r2">  
                <label for="p${contador}r2" class="box p${contador}r2 w-100">  
                <div class="course"> 
                <span class="circle"></span> <span id="p${contador}opc2">${preguntaObj.opciones[1]}</span> 
                </div></label></section> 
                <section> 
                <input type="radio" name="box" id="p${contador}r3">  
                <label for="p${contador}r3" class="box p${contador}r3 w-100">  
                <div class="course"> 
                <span class="circle"></span> <span id="p${contador}opc3">${preguntaObj.opciones[2]}</span> 
                </div></label></section> 
                <section> 
                <input type="radio" name="box" id="p${contador}r4">  
                <label for="p${contador}r4" class="box p${contador}r4 w-100">  
                <div class="course"> 
                <span class="circle"></span> <span id="p${contador}opc4">${preguntaObj.opciones[3]}</span> 
                </div></label></section> 
                </article> 
                <aside class="col-sm-6 imagen-pregunta"> 
                <img class="img mt-3" id="imagen p${contador}" src="${preguntaObj.imagen}"> 
                </aside> 
                </form >`;
            break;
    }


    // console.log(codigoHtml);
    var padre = document.getElementById("padrePreguntas");
    var nuevoHijo = document.createElement("form");
    nuevoHijo.classList.add("row", "g-2");
    nuevoHijo.innerHTML = codigoHtml;

    // Añade el nuevo nodo hijo al nodo padre
    padre.appendChild(nuevoHijo);

    //  console.log(nuevoHijo);
}



let finalizar = document.getElementById('finalizarB');
finalizar.addEventListener("click", comprobarResultado);


function comprobarResultado() {

    const radioButtons = document.querySelectorAll('input[type="radio"]');

    let preguntasContestadas = [];
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            //dentro de la cadena p1r3 (pregunta 1 respuesta 3), obtenenos la pregunta. si el id es p10r2, cogemos 2 caracteres
            let numPregunta = (radioButtons[i].id.length == 4) ? radioButtons[i].id.charAt(1) : radioButtons[i].id.charAt(1) + radioButtons[i].id.charAt(2);
            preguntasContestadas[numPregunta - 1] = radioButtons[i].id;
            //console.log("pregunta contestada: -", numPregunta-1 , " con la respusta", preguntasContestadas[numPregunta-1]);
            //console.log(radioButtons[i].id + " esta seleccionado");
        }
    }

    //quitamos los "undefined para contar cuantas preguntas se han contestado
    preguntasContestadas = preguntasContestadas.filter(function (elemento) {
        return elemento !== undefined;
    });

    // console.log("preguntas contestadas: ", preguntasContestadas.length);

    if (preguntasContestadas.length < preguntas.length) {
        mostrarModal("sinFinalizar");
    }
    else {
        let aciertos = contarAciertos(preguntasContestadas, preguntas);
        configurarExamenFinalizado(preguntasContestadas, preguntas);
        //alert("Examen finalizado, nota: " + aciertos + "/" + preguntas.length);
        mostrarModal("finalizado",aciertos,preguntas.length);
        //deshabilitamos el botón finalizar
        let btn = document.getElementById("finalizarB");
        btn.disabled = true;
    }
}


function contarAciertos(preguntasContestadas, preguntas) {
    console.log(preguntasContestadas.length);
    let aciertos = 0;
    for (let i = 0; i < preguntas.length; i++) {
        // console.log("pregunta generada: ", i, "id", preguntas[i].id, "correcta: ", preguntas[i].correcta);
        // console.log("pregunta contestada: ", i, "id", i+1, "contestada: ", preguntasContestadas[i]);

        let respuesta = (preguntasContestadas[i].length == 4) ? preguntasContestadas[i].charAt(3) : preguntasContestadas[i].charAt(4);
        console.log(respuesta);
        if (respuesta == preguntas[i].correcta) {
            aciertos++;
            console.log("ACIERTO EN PREGUNTA", i + 1);
        }
    }
    console.log("NOTA: ", aciertos, " SOBRE ", preguntas.length)
    return aciertos;
}

function configurarExamenFinalizado(preguntasContestadas, preguntas) {

    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = (preguntasContestadas[i].length == 4) ? preguntasContestadas[i].charAt(3) : preguntasContestadas[i].charAt(4);
        if (respuesta == preguntas[i].correcta) {
            //pregunta acertada
            //console.log("quitando course y añadiendo acierto en -", preguntasContestadas[i], "-");
            var inputId = document.getElementById(preguntasContestadas[i]);
            var division = inputId.parentNode.querySelector(".course");
            division.className = "acierto";
        }
        else { //pregunta fallada, primero, ponemos la eleccion como fallo:
            //console.log("quitando course y añadiendo fallo en -", preguntasContestadas[i], "-");
            var inputId = document.getElementById(preguntasContestadas[i]);
            var division = inputId.parentNode.querySelector(".course");
            division.className = "fallo";
            //despues tenemos que sacar el id de la opcion correcta, para ponerla en verde
            let preguntaEx = i + 1;
            let idOpcion = "p" + preguntaEx + "r" + preguntas[i].correcta;
            //console.log("En la pregunta", i, " la opcion correcta es: ", idOpcion);
            var inputId = document.getElementById(idOpcion);
            var division = inputId.parentNode.querySelector(".course");
            division.className = "acierto";
        }
    }


    //ahora, a en todas las preguntas "falladas", les añadimos el icono correspondiente de font awesome y quitamos el circulo:
    const fallos = document.querySelectorAll('.fallo');
    fallos.forEach(function (fallo) {
        const child = document.createElement('i');
        child.classList.add('fa-solid', 'fa-xmark');
        fallo.insertBefore(child, fallo.firstChild);
        const circulo = fallo.querySelector('.circle');
        fallo.removeChild(circulo);
    });


    //igual con los aciertos
    const aciertos = document.querySelectorAll('.acierto');
    aciertos.forEach(function (acierto) {
        const child = document.createElement('i');
        child.classList.add('fa-solid', 'fa-check');
        acierto.insertBefore(child, acierto.firstChild);
        const circulo = acierto.querySelector('.circle');
        acierto.removeChild(circulo);
    });

    //Para todas las opciones que no son ni acierto ni fallo, es decir que tienen class=course, ponemos class=normal, para inhabilitar la selección

    const niAciertoNiFallo = document.querySelectorAll('.course');
    niAciertoNiFallo.forEach(function (normal) {
        normal.className = "normal";
        const circulo = normal.querySelector('.circle');
        circulo.className = "circle2";
    });
}

function mostrarModal(estadoExamen,nota,numPreguntas) {
    switch (estadoExamen) {
        case 'finalizado':
            const modalExFinalizado = `<div class="modal" tabindex="-1" id="modalExFinalizado">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title"><b>Examen finalizado correctamente</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p>Su calificación es: ${nota} sobre ${numPreguntas}</p>
                <p>Se mostrará la solución sobre el examen, marcando en rojo las preguntas fallas</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
            </div>
            </div>`;
            document.body.insertAdjacentHTML("beforeend", modalExFinalizado);
            var myModal = new bootstrap.Modal(document.getElementById("modalExFinalizado"), {});
            myModal.show();
            break;
        case 'sinFinalizar':
            const modalExSinFinalizar = `<div class="modal" tabindex="-1" id="modalExSinFinalizar">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title"><b>Examen no finalizado</b></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <p>Para finalizar el examen es obligatorio contestar todas las preguntas</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
            </div>
            </div>`;
            document.body.insertAdjacentHTML("beforeend", modalExSinFinalizar);
            var myModal = new bootstrap.Modal(document.getElementById("modalExSinFinalizar"), {});
            myModal.show();
            break;
    }
}






