function miFuncion2_2_2() {
    var dias=["lunes","martes","miercoles"];
    console.log(dias.slice(1)); // extrae el el valor anterior al indice que se coloca
    for (let x = 0; x < dias.length; x++) {
        console.log(dias[x].slice(1)); // en este caso extrae el primer caracter de cada valor del array
        dias[x] = dias[x].charAt(0).toUpperCase()+ dias[x].slice(1); // se indica que el primer caracter de cada valor se cambien a mayúscula
    }
    document.getElementById('e1').innerHTML=dias;
}

function miFuncion2_2_3() {
    var mensaje = "Con cien cañones por banda viento en popa a toda vela";
    document.getElementById('e2').innerHTML=mensaje+"<br>";
    palabras = mensaje.split(" "); // cada palabra del mensaje se convierte en un valor de un array, indicado por un espacio dentro de la función
    document.getElementById('e2').innerHTML+="Cantidad de palabras en el mensaje: "+palabras.length;
}