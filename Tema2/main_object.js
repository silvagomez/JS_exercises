function Punto(nombre,x,y){ //los prototipos comienzan por mayúscula y es la forma que se usa y/o usaba para representar una clase, pero con la versión ES6 que ya podemos crear clases
    this.nombre=nombre;
    this.x=x;
    this.y=y;
}
Punto.prototype.ubicacion=function(){ // se le agrega un método al prototipo
    // console.log(this.nombre);
    document.getElementById('e1').innerHTML+="El punto "+this.nombre+" se encuentra ubicado en las cordenadas x="+this.x+" y="+this.y+".<br>";
}
Punto.prototype.mover= function(x1,y1){
    this.x=this.x+x1;
    this.y=this.y+y1;
    document.getElementById('e1').innerHTML+="El punto "+this.nombre+" se ha movido a las cordenadas x="+this.x+" y="+this.y+".<br>";
}
function distancia(Punto1,Punto2){
    // console.log(Punto1.x-Punto2.x);
    var d=Math.sqrt((Math.pow((Punto2.x-Punto1.x),2))+(Math.pow((Punto2.y-Punto1.y),2)));
    console.log(d);
    document.getElementById('e1').innerHTML+="La distancia entre puntos es: "+d+"<br>";
}

function miFuncion2_5_2() {
    puntoUno=new Punto("diego",5,10);
    puntoDos=new Punto("camilo",8,4);
    puntoUno.ubicacion();
    puntoDos.ubicacion();
    distancia(puntoUno,puntoDos);
    puntoUno.mover(5,5)
}