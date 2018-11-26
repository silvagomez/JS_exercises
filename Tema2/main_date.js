var inicio = Date.now(); // tiempo al cargar la página
function miFuncion2_4_2() {
    var fin = Date.now(); // tiempo al apretar el botón
    var transcurso = fin - inicio; // tiempo en milisegundos
    alert(parseInt(transcurso/1000)+" segundos");
}