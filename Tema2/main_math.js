function miFuncion2_3_2() {
    // la idea es crea un numero aleatorio, ingresarlo en el array luego, generar otro y preguntar si existe o no ó si hacer una comparativa para ver si son iguales, si es verdad o falso, una de las dos salida hace el push suma al contador
    var num=[];
    var contador=1;
    var ultimo=true;
    console.log(Math.floor((Math.random() * 49))); //floor() se usa para que devuelva un número entero. (random() * 49 + 1) devuelve un número del 1 al 49
    while (contador <= 5) {
        aleatorio=Math.floor((Math.random() * 49) + 1);
        if (!num.includes(aleatorio)) {
            num.push(aleatorio);
            contador++;
        }else {
            contador=contador;
        }
    }
    while(ultimo==true){
        aleatorio=Math.floor((Math.random() * 9) + 1);
        if (!num.includes(aleatorio)) {
            num.push(aleatorio);
            ultimo=false;
        }else {
            ultimo=true;
        }
    }
    document.getElementById('e1').innerHTML=num;
    
}

function miFuncion2_3_3() {
    var numeros=[43,0,34,4,743,3,5,8,13,8,344,0,23,3,1233,2,5,734,3,2234,5,1];
    var mayor=Math.max.apply(null, numeros); // obtener el mayor
    var menor=Math.min.apply(null, numeros); // obtener el menor
    document.getElementById('e2').innerHTML="El mayor es "+mayor+"<br>";
    document.getElementById('e2').innerHTML+="El mayor es "+menor;
}