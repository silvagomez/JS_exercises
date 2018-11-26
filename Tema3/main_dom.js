var pestanha=[];
function miFuncion3_1a() {
    pestanha.push(window.open('https://www.silvagomez.com', '_blank')); // la función window.open recibe como primer parámetro una url, el segundo parámetro indicamos como queremos abrir la url, en este caso _blank genera una nueva pestaña. Cada vez que se ejecute la función la referencia se alamacenará en un array.
}
function miFuncion3_1b() {
    if(pestanha.length>0){ //pestaña es un array
        p=pestaña.pop();
        p.close(); //cerramos la pestaña
    }
}
//
var pestanha2;
var abrir1=document.getElementById('abrir1');
var cerrar1=document.getElementById("cerrar1");
cerrar1.style.visibility="hidden"; // le decimos que la variable que tiene el input tenga un estilo css de oculto
console.log(cerrar1); // seguramente si en la consola aparece null ó un error de "cannot read property 'style' of null" esto se debe a que el html y el script no se ejecutan o descargan de forma asíncrona, es decir en paralelo ó a la vez, por esta razón en el html debemos colocar  <script defer src="ruta"></script> (ir a linea 8)
function miFuncion3_2a() {
    pestanha2=(window.open('https://www.silvagomez.com', '_blank'));
    abrir1.style.visibility="hidden";
    cerrar1.style.visibility="visible";
}
function miFuncion3_2b() {
    pestanha2.close();
    abrir1.style.visibility="visible";
    cerrar1.style.visibility="hidden";
}
//
var pestanha2_1;
var abro_cierro = document.getElementById('abro_cierro');
console.log(abro_cierro); // para ver que en la variable abro_cierro guardo el inpunt
function miFuncion3_2_1() {
    if (abro_cierro.value=="Push me!") { // si el value del input es igual a:
        pestanha2_1=(window.open('https://www.silvagomez.com', '_blank'));
        abro_cierro.value="Close me"; // cambiamos el value del input
    } else {
        pestanha2_1.close();
        abro_cierro="Push me!"; // cambiamos el value del input
    } // también se podía usar .innerHTML en vez de .value
}
//
function miFuncion3_3() {
    var result=confirm("Desea abrir la página, abandonará este sitio"); // confirm es un pop ups o ventana emergente para confirmación, en la cual estamos retornando la respuesta en una variable
    if(result==true){
        var pestanha3=(window.open('https://www.silvagomez.com', '_self'));
    }else{
        pestanha3.close();
    }

}