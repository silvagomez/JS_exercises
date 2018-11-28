var pestanha=[];
function miFuncion3_1a() {
    pestanha.push(window.open('https://www.silvagomez.com', '_blank')); // la función window.open recibe como primer parámetro una url, el segundo parámetro indicamos como queremos abrir la url, en este caso _blank genera una nueva pestaña. Cada vez que se ejecute la función la referencia se alamacenará en un array.
}
function miFuncion3_1b() {
    if(pestanha.length>0){ //pestaña es un array
        p=pestanha.pop();
        p.close(); //cerramos la pestaña
    }
}
//--//
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
//--//
var pestanha2_1;
var abro_cierro = document.getElementById('abro_cierro');
console.log(abro_cierro); // para ver que en la variable abro_cierro guardo el inpunt
function miFuncion3_2_1() {
    if (abro_cierro.value=="Push me!") { // si el value del input es igual a:
        pestanha2_1=(window.open('https://www.silvagomez.com', '_blank'));
        abro_cierro.value="Close me"; // cambiamos el value del input
    } else {
        pestanha2_1.close();
        abro_cierro.value="Push me!"; // cambiamos el value del input
    } // también se podía usar .innerHTML en vez de .value
}
// hacer de otra manera en la que se abre la pestaña y pregunte si quiere cerrarla
function miFuncion3_3() {
    var result=confirm("Desea abrir la página, abandonará este sitio"); // confirm es un pop ups o ventana emergente para confirmación, en la cual estamos retornando la respuesta en una variable
    if(result==true){
        var pestanha3=(window.open('https://www.silvagomez.com','_self'));
    }else{
        pestanha3.close();
    }
}
//--//
var contador3_4=0;
var ventana3_4;
var intervalo3_4;
function miFuncion3_4() {
    ventana3_4 = window.open('','','width=400,height=200'); // los dos primeros pares de comillas deben ir vacios para evitar un error de "from accessing a cross-origin frame"
    intervalo3_4 = setInterval(muevete,1000); // llama a la función muevete() y da un intervalo de tiempo
}
function muevete() {
    contador3_4++;
    if (contador3_4>5){
        ventana3_4.close();
	}else{
        ventana3_4.moveBy(Math.floor((Math.random()*100)+1),Math.floor((Math.random()*100)+1));
        // moveBy(deltaX, deltaY) -> mueve la ventana de forma relativa a su posición
        // se puede usar moveTo(x,y) -> mueve a una coordenada específica, a veces no se por que sólo se desplaza en su eje x ó no 
    }
}
//--//
var intervalo3_5;
var cargador3_5=document.getElementById('cargador');
var porcentaje3_5=0;
var incremetar3_5=5;
function miFuncion3_5() {
    // console.log(cargador3_5.style.width);
    if(cargador3_5.style.width=='0px'){
        intervalo3_5=setInterval(cargando,100); // se crea el intervalo que llama a la función cargando()
    }
}
function cargando() {
    var ancho = parseInt(cargador3_5.style.width); //
    ancho+=incremetar3_5; // el ancho aumenta de 5 en 5
    porcentaje3_5++; // porcentaje aumenta de 5 en 5
    cargador3_5.style.width= ancho +"px"; // le damos el ancho al <div>
    cargador3_5.innerHTML= porcentaje3_5 + "%"; // escribimos el porcentaja
    if (porcentaje3_5==25){
		cargador3_5.style.backgroundColor ="#621708";
	}
	if (porcentaje3_5==50){
		cargador3_5.style.backgroundColor ="#941B0C";
	}
	if (porcentaje3_5==75){
		cargador3_5.style.backgroundColor ="#BC3908";
	}
	if (porcentaje3_5==100){
		cargador3_5.style.backgroundColor ="#F6AA1C";
		clearInterval(intervalo3_5); // cuando llega a 100 se detiene 
	}
}
//--//
var ventana3_6a;
var ventana3_6b;
function miFuncion3_6() {
    ventana3_6a = window.open("", "", "width=200, height=200,toolbar=no,location=0,");
    ventana3_6b = window.open("https://www.silvagomez.com", "", "width=800, height=500, status=no, resizable=no");
}
//--//
function miFuncion3_7() {
    var respuesta3_7=confirm("Desea abandonar este sitio");
    if(respuesta3_7==true){
        var url3_7=prompt("Ingrese la página a la que quiere ir");
        var ventana3_7=(window.open('http://www.'+url3_7,'_self'));
    }
}
//--//
var iframe3_8=document.getElementById('ruta3_8'); // recogo en una variable todo el iframe
iframe3_8.style.display="none";
function miFuncion3_8() {
    url3_8 = document.getElementById('url3_8').value; // recogo en una variable el contenido
    iframe3_8.style.display="block";
    // console.log(iframe3_8);
    iframe3_8.src="http://www."+url3_8;
}
//--//
function miFuncion3_9() {
    
}
//--//
function miFuncion3_10() {
    alert(document.getElementById('Hyeri1').src); // a través del id que es único
    alert(document.getElementsByName('Hyeri2')[0].src); // a través de name, pueden haber varias etiquetas con el mismo name por eso indicamos la posición que buscamos en el array
    alert(document.getElementsByClassName('Hyeri3')[0].src); // a través de className, pueden haber varias etiquetas con el mismo className por eso indicamos la posición que buscamos en el array
    alert(document.getElementsByTagName('img')[0].src); // a través de tagName, pueden haber varias etiquetas del mismo tipo por eso indicamos la posición que buscamos en el array
    alert(document.images[0].src); // a través de todas las images indicando su posición en el array
}
//--//
function miFuncion3_11() {
    var tamanho=document.getElementById('tamanho3_11').value; // guardo la opción elegida
    var parrafo3_11=document.getElementById('parrafo3_11'); //guardo todo el <p>        
    switch (tamanho) { // para modificar el tamaño de la tipografia
        case '':
        alert("Selecciona una opción para modificar el párrafo");
            break;
        case 'pequeño':
        parrafo3_11.style.fontSize=0.8+"em";
            break;
        case 'mediano':
        parrafo3_11.style.fontSize=1+"em";
        break;
        case 'grande':
        parrafo3_11.style.fontSize=1.2+"em";
        break;
        default:
            break;
    }
}
//--//
function miFuncion3_12() {
    var tamanho=document.getElementById('tamanho3_12').value; // guardo la opción elegida de tamaño
    var color=document.getElementById('color3_12').value; // guardo la opción elegida de color
    var parrafo3_12=document.getElementById('parrafo3_12'); //guardo todo el <p>        
    switch (tamanho) { // para modificar el tamaño de la tipografia
        case '':
            alert("Selecciona un tamaño para el párrafo");
            break;
        case 'pequeño':
            parrafo3_12.style.fontSize=0.8+"em";
            break;
        case 'mediano':
            parrafo3_12.style.fontSize=1+"em";
            break;
        case 'grande':
            parrafo3_12.style.fontSize=1.2+"em";
            break;
        default:
            break;
    }
    switch (color) { // para modificar el color de la tipografia
        case '':
            alert("Selecciona un color para el párrafo");
            break;
        case 'rojo':
            parrafo3_12.style.color='red'
            break;
        case 'verde':
            parrafo3_12.style.color='green'
            break;
        case 'azul':
            parrafo3_12.style.color='blue'
            break;
        case 'negro':
            parrafo3_12.style.color='black'
            break;
        default:
            break;
    }
}
//--//
var tamanho3_13 = document.getElementById('tamanho3_13');
var color3_13 = document.getElementById('color3_13');
color3_13.style.display="none";
function miFuncion3_13(valor) {
    if (valor==1) {
        tamanho3_13.style.display="block";
        color3_13.style.display="none";
    }
    if (valor==0) {
        tamanho3_13.style.display="none";
        color3_13.style.display="block";
    }
}
function tamanhoF3_13() {
    var tamanho=document.getElementById('tamanho3_13').value; // guardo la opción elegida de tamaño
    document.getElementById('parrafo3_13').style.fontSize=tamanho; //guardo todo el <p>
}
function colorF3_13() {
    var color=document.getElementById('color3_13').value; // guardo la opción elegida de color
    document.getElementById('parrafo3_13').style.color=color;
}