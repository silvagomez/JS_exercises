function miFuncion2_1_2() {
    var dias=["Lunes","Martes","Miercoles","Jueves","Viernes"];
    var msndias="";
    for (var x = 0; x < dias.length; x++) {
        msndias+=dias[x]+" ";
    }
    document.getElementById('e1').innerHTML=msndias;
    dias.push("Sábado"); // para ingresar elementos en el array
    dias.push("Domingo");
    document.getElementById('e1').innerHTML+="<br>";
    for (var x = 0; x < dias.length; x++) {
        document.getElementById("e1").innerHTML+=dias[x]+" ";
    }
}

function miFuncion2_1_3(){
    var dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];

    document.getElementById('e2').innerHTML="<b>Días de la semana</b> "
    for (var x = 0; x < dias.length; x++) {
        document.getElementById('e2').innerHTML+=dias[x]+" ";
    }
    document.getElementById('e2').innerHTML+="<br>";

    var laborables = dias.slice(0,4); // hace una copia del array del 0 al 4 elemento
    document.getElementById('e2').innerHTML+="<b>Días laborables</b> ";
    for (var x = 0; x < laborables.length; x++) {
        document.getElementById('e2').innerHTML+=laborables[x]+" ";
    }
    document.getElementById('e2').innerHTML+="<br>";

    var festivos = dias.slice(-2); // hace una copia de los ultimos dos elementos del array
    document.getElementById('e2').innerHTML+="<b>Días festivos</b> ";
    for (var x = 0; x < festivos.length; x++) {
        document.getElementById('e2').innerHTML+=festivos[x]+" ";
    }
}

function miFuncion2_1_4() {
    var alumnos=['Sanchez', 'Lopez','Cuesta', 'Alvarez', 'Zambrano','Sevilla'];

    alumnos.sort(); // organiza el array en orden de forma ascendente
    for (var x = 0; x < alumnos.length; x++) {
        document.getElementById('e4').innerHTML+=alumnos[x]+" ";
    }
    document.getElementById('e4').innerHTML+="<br>";
    alumnos.reverse(); // organiza el array en orden descendente
    for (var x = 0; x < alumnos.length; x++) {
        document.getElementById('e4').innerHTML+=alumnos[x]+" ";
    }
}

function miFuncion2_1_5() {
    var numeros=[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    var num=[];
    for (var x = 0; x < numeros.length; x++) {
        if (num.includes(numeros[x])==false) { // pregunta si en el array num se encuentra o incluye x del array de numeros
            num.push(numeros[x]);
        }
    }
    num.sort();
    for (var x = 0; x < num.length; x++) {
        document.getElementById('e5').innerHTML+=num[x]+" ";
    }
}

function miFuncion2_1_6() {
    var numeros=[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    //var indices=[];
    var numerin=3;
    var ind=numeros.indexOf(numerin); // se le da un índice del valor que una variable, esta función devuelve la posición de la variable a buscar, si no existe devuelve -1
    // console.log(ind);
    while (ind != -1) { // mientras indice sea distinto de -1 es decir si no se encuentra ó miestras exista
        document.getElementById('e6').innerHTML+="Posición del "+numerin+" es: "+ind+"<br>";
        //indices.push(ind);
        ind=numeros.indexOf(numerin, ind+1); // se le pasa nuevamente al valor a buscar y se le suma +1 al indice para moverse a la siguiente posición del valor
    }
    //console.log(indices);
}

function miFuncion2_1_7() {
    var numeros=[4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    var par=[];
    var impar=[];
    for (var x = 0; x < numeros.length; x++) {
        if (numeros[x]%2==0) {
            par.push(numeros[x]);
        }
        else{
            impar.push(numeros[x]);
        }
    }
    // par.sort(function(a,b){return a-b;});
    // impar.sort(function(a,b){return a-b;});
    par.sort();
    impar.sort();
    document.getElementById('e7').innerHTML ="Números pares "+par+"<br>";
    document.getElementById('e7').innerHTML +="Números impares "+impar;
}

function miFuncion2_1_8() {
    var numeros = [43,0,34,4,743,-45,3,5,8,13,8,344,0,23,3,1233,2,5,734,3,2234,5,1];
    document.getElementById('e8').innerHTML=numeros+"<br>";
    numeros.sort(function(a,b){return a-b;}); //se realiza una función dentro de sort para que al momento de oragnizarlo tome todo el número y no sólo el primer dígito. {return a-b;} -> ascendente {return b-a;} -> descendente 
    document.getElementById('e8').innerHTML+=numeros+"<br>";
    document.getElementById('e8').innerHTML+="El menor es "+numeros[0]+"<br>";
    document.getElementById('e8').innerHTML+="El mayor es "+numeros[numeros.length-1]; //para tomar el último número
}

function miFuncion2_1_9() {
    var numeros = [43,0,34,4,743,-45,3,5,8,13,8,344,0,23,3,1233,2,5,734,3,2234,5,1];
    //método de la burbuja
    for(var i=1;i<numeros.length;i++){
		for(var j=0;j<(numeros.length-i);j++)
		{
			if(numeros[j]>numeros[j+1])
			{
				k=numeros[j+1];
				numeros[j+1]=numeros[j];
				numeros[j]=k;
			}
		}
	}
    document.getElementById('e9').innerHTML=numeros;
}

function miFuncion2_1_10() {
    
}