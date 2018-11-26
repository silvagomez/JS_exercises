function miFuncion2_7_2() {
    cadena = document.getElementById('CajaTexto').value;
	expresion=/^\d{1,2}[-/]\d{1,2}[-/]\d+$/
	if(expresion.test(cadena)){
		alert( cadena + " es una fecha correcta");
	}else{
		alert("el texto " + cadena + " no es una fecha correcta");
	}
}

function miFuncion2_7_3() {
    cadena = "Si no te gusta algo, cambialo. Si no lo puedes cambiar, cambia tu actitud.";
    document.getElementById('e2').innerHTML+=cadena+"<br>";
    expr=/camb/g;
    cadena2= cadena.replace(expr, "limp");
    document.getElementById('e2').innerHTML+=cadena2+"<br>";
}

function miFuncion2_7_4() {
    cadena = "la l cambia todas la*s palabras que empiecen por l por la cadena 123, los lados de los cuadrados son lineas iguales";
    document.getElementById('e3').innerHTML+=cadena+"<br>";
    expr=/\bl\S*/ig;
    cadena2= cadena.replace(expr, "123");
    document.getElementById('e3').innerHTML+=cadena2+"<br>";
}