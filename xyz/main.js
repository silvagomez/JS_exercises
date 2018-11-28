var arrayNumeros1 = [43, 0, -45, 4, 3, 8, 13, 1, 0, -2];
document.getElementById('parrafo1').innerHTML=arrayNumeros1; // muestra el array organizado de mayor a menor
console.log(arrayNumeros1); // muestra el array desorganizado
for(var x=1;x<arrayNumeros1.length;x++){
    for(var y=0;y<(arrayNumeros1.length-x);y++)
    {
        if(arrayNumeros1[y]<arrayNumeros1[y+1]) // preguntamos sí Y es menor que Y+1 para organiza de mayor a menor
        {
            z=arrayNumeros1[y+1]; // le pasamos a z el número de la posición Y+1
            arrayNumeros1[y+1]=arrayNumeros1[y]; // alamcenamos en Y+1 el valor de Y 
            arrayNumeros1[y]=z; // le pasamos el valor de Y+1 que previamente almacenamos en Z
        }
    }
}
console.log(arrayNumeros1); // muestra el array organizado de mayor a menor
document.getElementById('parrafo2').innerHTML=arrayNumeros1; // muestra el array organizado de mayor a menor

function funcionExamen() {
    var arrayNumeros2 = [-5, 1, 3, 0, 2, -6, 6, 9, 8, 4];
    for (let x = 0; x < arrayNumeros2.length; x++) {
        alert("Posición ["+x+"] tiene: "+arrayNumeros2[x]);
    }
}