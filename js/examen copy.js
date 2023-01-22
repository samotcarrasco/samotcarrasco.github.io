
/* Este fichero javascript.....
*/



/* Leemos archivo con AJAX */
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "js/preguntas.json", true);
xhttp.send();


xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        console.log(datos);
        //resto de código

        //guardamos en un array numeros aletorios sin repetir
        let randoms = [];
        while (randoms.length < 4) {
            let random = Math.floor(Math.random() * 4) + 1;
            if (randoms.indexOf(random) == -1) {
                randoms.push(random);
            }
        }


        console.log("order aleotiro de lectura de preguntas: " + randoms);
        let contador = 1;
        let preguntasGeneradas = 0;
        let asignadas = [];
        do {

            let aleatorio = randoms[contador - 1];

            console.log("---------------" + aleatorio);
            let pregunta = "p" + contador;
            console.log("Generando pregunta " + pregunta + " leida pregunta de tipo: " + datos.preguntas[aleatorio - 1].tipo);
            //los id de las preguntas son: p1, p2, p3 .......
            console.log("ID PREGUNTA LEIDA: " + datos.preguntas[aleatorio - 1].id);
            console.log("CONTADOR: " + contador)

            let mismoTipo = false;
            let tipoPregunta = "";
            const classNames = document.getElementById(pregunta).classList;


            let aleatorio2 = aleatorio;
            do {
                let id = datos.preguntas[aleatorio2 - 1].id;
                classNames.forEach(name => {
                
                    tipoPregunta = datos.preguntas[aleatorio2 - 1].tipo;
                    if (name === tipoPregunta) {
                        console.log("Clase coincide " + pregunta + " id=" + id);
                        mismoTipo = true;
                    }
                    //si no son del mismo tipo, probamos con la siguiente pregunta.
                })
                if (!mismoTipo) {
                    aleatorio2++;
                    console.log("clase no coincide, vamos a probar con la siguiente pregunta");
                }
            } while (!mismoTipo);


            if (mismoTipo) {

            
                //generamos el objeto Pregunta
                const id = datos.preguntas[aleatorio2 - 1].id;
                const enunciado = datos.preguntas[aleatorio2 - 1].enunciado;
                const opciones = [datos.preguntas[aleatorio2 - 1].opciones.opc1,
                                   datos.preguntas[aleatorio2 - 1].opciones.opc2,
                                   datos.preguntas[aleatorio2 - 1].opciones.opc3,
                                   datos.preguntas[aleatorio2 - 1].opciones.opc4];
                let tipo = datos.preguntas[aleatorio2 - 1].tipo;
                let imagen = datos.preguntas[aleatorio2 - 1].imagen;
                let correcta = datos.preguntas[aleatorio2 - 1].correcta;

                const preguntaObj = new Pregunta()

                console.log(" Generada pregunta" + preguntaObj.id);

                console.log("modificando DOM " + pregunta);
                if (tipoPregunta === "imagen") {
                    let idImagen = "imagen" + pregunta;
                    let elemento = document.getElementById(idImagen);
                    console.log(datos.preguntas[aleatorio2 - 1].imagen);
                    elemento.src = datos.preguntas[aleatorio2 - 1].imagen;
                }
                document.getElementById(pregunta).innerHTML = contador + ".- " + datos.preguntas[aleatorio2 - 1].enunciado;
                contador++;
                for (let i = 1; i <= 4; i++) {
                    let opcion = "opc" + i;
                    let opcion2 = pregunta + opcion;
                    document.getElementById(opcion2).innerHTML = datos.preguntas[aleatorio2 - 1].opciones[opcion]; //ojoo --> hay que quitar el punto y poner la variable entre corchetes
                }
                preguntasGeneradas++;
            }

        } while (preguntasGeneradas < 4);

    }

}

//constructor de los objetos Pregunta
function Pregunta(id, enunciado, opciones = [], tipo, imagen, correcta) {
    this.id = id;
    this.enunciado = enunciado;
    this.opciones = opciones;
    this.tipo = tipo;
    this.imagen = this.imagen;
    this.correcta = this.correcta;
}







//opcion para leer el fichero desde el formulario (deshechada)
/*
document.getElementById("my_file_input").addEventListener("change", function () {
  var file_to_read = document.getElementById("my_file_input").files[0];
  var fileread = new FileReader();
  fileread.onload = function (e) {
    var content = e.target.result;
    // console.log(content);
    var intern = JSON.parse(content); // Array of Objects.
    console.log(intern); // You can index every object
    document.getElementById("p1").innerHTML = intern.preguntas[0].id + ". " + intern.preguntas[0].enunciado;
  };
  fileread.readAsText(file_to_read);
});
*/
