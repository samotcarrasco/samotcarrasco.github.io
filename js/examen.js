
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


    //guardamos en un array numeros aletorios sin repetir
    let randoms = [];
    while (randoms.length < 3) {
      let random = Math.floor(Math.random() * 3) + 1;
      if (randoms.indexOf(random) == -1) {
        randoms.push(random);
      }
    }

    console.log(randoms);
    let contador = 1;
    let preguntasGeneradas = 0;
    do {

      let aleatorio = randoms[contador - 1];
      
      console.log("---------------" + aleatorio);
      let pregunta = "p" + contador;
      console.log(pregunta);
      //los id de las preguntas son: p1, p2, p3 .......
      console.log(contador + ".... " + datos.preguntas[aleatorio - 1].enunciado);

      let mismoTipo = false;

      const classNames = document.getElementById(pregunta).classList;

      console.log(classNames + "VVVSSS");
      console.log(datos.preguntas[aleatorio - 1].tipo);

      classNames.forEach(name => {
        if (name == datos.preguntas[aleatorio - 1].tipo) {
          mismoTipo = true;
          console.log("MIsMO TIPOO");
        }
      })

      if (mismoTipo) {
        document.getElementById(pregunta).innerHTML = contador + ".- " + datos.preguntas[aleatorio - 1].enunciado;
        contador++;
        for (let i = 1; i <= 4; i++) {
          let opcion = "opc" + i;
          let opcion2 = pregunta + opcion;
          document.getElementById(opcion2).innerHTML = datos.preguntas[aleatorio - 1][opcion]; //ojoo --> hay que quitar el punto y poner la variable entre corchetes
        }
        preguntasGeneradas++;
      }
      else {
        console.log("NO MISOOMO TIPOO");
        contador++;
      }

    } while (preguntasGeneradas < 3);
  }
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
