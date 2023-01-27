
/* Este fichero javascript.....
*/



/* Leemos archivo con AJAX */
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "assets/json/preguntas.json", true);
xhttp.send();

//en este array guardaremos todas las preguntas que se han generado, para posteriormente hacer el calculo del resultado
let preguntas = [];
//variable global con el número de preguntas que tendrá el examen
let numPreguntas=10;

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        console.log(datos);
        let preguntasTotalesJson=datos.preguntas.length;
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
            
            codigoHtml = `<form class="row g-2" id="f${preguntaObj.id}"> 
             <article class="col-12"> 
            <p class="larga fw-bold mt-3" id="p${contador}">  ${contador}.- ${preguntaObj.enunciado}</p>
             <div class="row"> 
            <input type="radio" name="box" id="p${contador}r1"> 
            <input type="radio" name="box" id="p${contador}r2"> 
            <input type="radio" name="box" id="p${contador}r3"> 
            <input type="radio" name="box" id="p${contador}r4"> 
            <label for="p${contador}r1" class="box p${contador}r1"> 
               <div class="course"> <span class="circle"></span> <span id="p${contador}opc1">${preguntaObj.opciones[0]}</span> </div> </label>
            <label for="p${contador}r2" class="box p${contador}r2"> 
               <div class="course"> <span class="circle"></span> <span id="p${contador}opc2">${preguntaObj.opciones[1]}</span> </div> </label>
            <label for="p${contador}r3" class="box p${contador}r3"> 
               <div class="course"> <span class="circle"></span> <span id="p${contador}opc3">${preguntaObj.opciones[2]}</span> </div> </label>
            <label for="p${contador}r4" class="box p${contador}r4"> 
               <div class="course"> <span class="circle"></span> <span id="p${contador}opc4">${preguntaObj.opciones[3]}</span> </div> </label>
            </div>
            </article>
            </form>`;
            break;
        case "corta":

            codigoHtml = "<form class=\"row g-2\" id=\"f"+preguntaObj.id+"\"> <article class=\"col-12\">" +
                "<p class=\"corta fw-bold mt-3\" id=\"p" + contador + "\"> " + contador + ".-" + preguntaObj.enunciado + "</p>" +
                "<div class=\"row\">" +
                "<div class=\"col-md-6\"> <input type=\"radio\" name=\"box\" id=\"p" + contador + "r1\"> " +
                "<label for=\"p" + contador + "r1\" class=\"box p" + contador + "r1 w-100\"> " +
                "<div class=\"course\"> <span class=\"circle\"></span> <span class=\"subject\" id=\"p" + contador + "opc1" + "\">" + preguntaObj.opciones[0] + "</span> </div> </label> </div>" +
                "<div class=\"col-md-6\"> <input type=\"radio\" name=\"box\" id=\"p" + contador + "r2\"> " +
                "<label for=\"p" + contador + "r2\" class=\"box p" + contador + "r2 w-100\"> " +
                "<div class=\"course\"> <span class=\"circle\"></span> <span class=\"subject\" id=\"p" + contador + "opc2" + "\">" + preguntaObj.opciones[1] + "</span> </div> </label> </div>" +
                "<div class=\"col-md-6\"> <input type=\"radio\" name=\"box\" id=\"p" + contador + "r3\"> " +
                "<label for=\"p" + contador + "r3\" class=\"box p" + contador + "r3 w-100\"> " +
                "<div class=\"course\"> <span class=\"circle\"></span> <span class=\"subject\" id=\"p" + contador + "opc3" + "\">" + preguntaObj.opciones[2] + "</span> </div> </label> </div>" +
                "<div class=\"col-md-6\"> <input type=\"radio\" name=\"box\" id=\"p" + contador + "r4\"> " +
                "<label for=\"p" + contador + "r4\" class=\"box p" + contador + "r4 w-100\"> " +
                "<div class=\"course\"> <span class=\"circle\"></span> <span class=\"subject\" id=\"p" + contador + "opc4" + "\">" + preguntaObj.opciones[3] + "</span> </div> </label> </div>" +
                "</article>" +
                "</form>";
            break;
        case "imagen":
            codigoHtml = " <form class=\"row g-2\" id=\"f"+preguntaObj.id+"\"> <article class=\"col-sm-6\"> " +
                "<p class=\"imagen fw-bold mt-3\" id=\"p" + contador + "\"> " + contador + ".-" + preguntaObj.enunciado + "</p>" +
                "<section>" +
                "<input type=\"radio\" name=\"box\" id=\"p" + contador + "r1\"> " +
                "<label for=\"p" + contador + "r1\" class=\"box p" + contador + "r1 w-100\"> " +
                "<div class=\"course\">" +
                "<span class=\"circle\"></span> <span id=\"p" + contador + "opc1" + "\">" + preguntaObj.opciones[0] + "</span>" +
                "</div></label></section>" +
                "<section>" +
                "<input type=\"radio\" name=\"box\" id=\"p" + contador + "r2\"> " +
                "<label for=\"p" + contador + "r2\" class=\"box p" + contador + "r2 w-100\"> " +
                "<div class=\"course\">" +
                "<span class=\"circle\"></span> <span id=\"p" + contador + "opc2" + "\">" + preguntaObj.opciones[1] + "</span>" +
                "</div></label></section>" +
                "<section>" +
                "<input type=\"radio\" name=\"box\" id=\"p" + contador + "r3\"> " +
                "<label for=\"p" + contador + "r3\" class=\"box p" + contador + "r3 w-100\"> " +
                "<div class=\"course\">" +
                "<span class=\"circle\"></span> <span id=\"p" + contador + "opc3" + "\">" + preguntaObj.opciones[2] + "</span>" +
                "</div></label></section>" +
                "<section>" +
                "<input type=\"radio\" name=\"box\" id=\"p" + contador + "r4\"> " +
                "<label for=\"p" + contador + "r4\" class=\"box p" + contador + "r4 w-100\"> " +
                "<div class=\"course\">" +
                "<span class=\"circle\"></span> <span id=\"p" + contador + "opc4" + "\">" + preguntaObj.opciones[3] + "</span>" +
                "</div></label></section>" +
                "</article>" +
                "<aside class=\"col-sm-6 imagen-pregunta\">" +
                "<img class=\"img mt-3\" id=\"imagenp" + contador + "\" src=\"" + preguntaObj.imagen + "\">" +
                "</aside>" +
                "</form > ";
            break;
    }


    console.log(codigoHtml);
    var padre = document.getElementById("padrePreguntas");
    var nuevoHijo = document.createElement("form");
    nuevoHijo.classList.add("row", "g-2");
    nuevoHijo.innerHTML = codigoHtml;

    // Añade el nuevo nodo hijo al nodo padre
    padre.appendChild(nuevoHijo);

    console.log(nuevoHijo);
}




//TO-DO
let finalizar = document.getElementById('finalizarB');
finalizar.addEventListener("click", comprobarResultado);

function comprobarResultado (){
    console.log(preguntas.length);
    for (let objeto of preguntas) {
        console.log(objeto.id + "-"+objeto.correcta);
    }
    
    var checksActivos = document.querySelectorAll("#f1 input[type='checkbox']:checked");
    if (checksActivos.length < 1){
        alert("No se han contestado todas las preguntas, !!!! no restan los errores!!!");
    }
}



