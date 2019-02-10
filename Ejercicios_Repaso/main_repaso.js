function miFuncion1() {
    alert("Hola Mundo");
}

function miFuncion2() {
    let numero = document.getElementById('input_ejer2').value;
    if (numero=="") {
        alert("Debe ingresar un número");
    } else {
        if (numero%2==0) {
            alert(numero + " es divisible por 2");
        } else {
            alert("El número no es divisible por 2");
        }
    }
}

function miFuncion3() {
    let impares=[];
    for (let index = 1; index <= 100; index++) {
        if (index%2==1) {
            impares.push(index);
        }
    }
    document.getElementById('text_area_ejer3').innerHTML=impares;
}

function miFuncion4() {
    var alumnos = ["Sanchez", "Sanchez", "Lopez", "Cuesta", "Alvarez", "Zambrano", "Sevilla", "Alvarez", "Cuesta", "Alvarez", "Sevilla", "Lopez", "Jimenez"];
    alumnos.sort();
    document.getElementById('p_ejer4').innerHTML=alumnos+"<br>";
    var nombres=[];
    for (let x = 0; x < alumnos.length; x++) {
        // pregunta si en el array nombres se encuentra o incluye  el dato en posición x del array de alumnos
        if (nombres.includes(alumnos[x])==false) { 
            nombres.push(alumnos[x]);
        }
    }
    document.getElementById('p_ejer4').innerHTML+=nombres+"<br>";
    for (let y = 0; y < nombres.length; y++) {
        let cantidad=0;
        for (let z = 0; z < alumnos.length; z++) {
            if (nombres[y].includes(alumnos[z])==true) {
                cantidad++;
            }
        }
        document.getElementById('p_ejer4').innerHTML+=nombres[y]+" aparece -> "+cantidad+"<br>";
    }
}

function miFuncion5() {
    var numeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    var numeros_buscados = [5,6,8,13];
    document.getElementById('p_ejer5').innerHTML="Resultado<br>";
    for (let x = 0; x < numeros_buscados.length; x++) {
        var confirmacion = numeros.includes(numeros_buscados[x]);
        if (confirmacion==true) {
            var posición = numeros.indexOf(numeros_buscados[x])
            document.getElementById('p_ejer5').innerHTML+="Posición del número: "+numeros_buscados[x]+" => "+posición+"<br>";
        } else {
            alert("El número "+numeros_buscados[x]+" no se encuentra")
        }
    }
}

function miFuncion6() {
    var numeros = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1];
    var pares = [];
    var impares = [];
    for (let x = 0; x < numeros.length; x++) {
        if (numeros[x]%2==0) {
            pares.push(numeros[x]);
        } else {
            impares.push(numeros[x]);
        }
    }
    pares.sort();
    impares.sort();
    document.getElementById('p_ejer6').innerHTML=impares+","+pares;
}

function miFuncion7() {
    var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    for (let x = 0; x < dias.length; x++) {
        // .charAt(0).toLowerCase() solo toma la primera letra
        // slice(1) toma el elemento apartir de la posición que se le indica
        // entonces almacena la primera letra + el contenido restante a partir de la posición 1 del elemento
        dias[x] =  dias[x].charAt(0).toLowerCase() + dias[x].slice(1);   
    }
    document.getElementById('p_ejer7').innerHTML=dias;
}

function miFuncion8() {
    var numeros = [43,0,34,4,743,-45,3,5,8,13,8,344,0,23,3,1233,2,5,734,3,2234,5,1];
    // método burbuja inverso
    for(var x = 0; x < numeros.length; x++){
        for(var y = 0; y < (numeros.length+x); y++){
            if(numeros[y] > numeros[y-1]){
                z = numeros[y-1];
                numeros[y-1] = numeros[y];
                numeros[y] = z;
            }
        }
    }
    document.getElementById('p_ejer8').innerHTML=numeros;
}

function miFuncion9() {
    
}

class Persona {
    constructor(){
        this.nombre="Diego";
        this.apellido="Silva";
        this.dni="No tengo dni";
        this.direccion="Calle Urizar";
        this.telefono=8106658;
    }

    get_nombre(){
        return this.nombre;
    }
    get_apellido(){
        return this.apellido;
    }
    get_dni(){
        return this.dni;
    }
    get_direccion(){
        return this.direccion;
    }

    alert_nombre(){
        alert(this.nombre);
    }
    alert_apellido(){
        alert(this.apellido);
    }
    alert_dni(){
        alert(this.dni);
    }
    alert_direccion(){
        alert(this.direccion);
    }
}
function miFuncion10() {
    let persona = new Persona();

    let nombre=persona.get_nombre();
    let apellido=persona.get_apellido();
    let dni=persona.get_dni();
    let direccion=persona.get_direccion();
    alert(nombre+" "+apellido+" "+dni+" "+direccion);

    persona.alert_nombre();
    persona.alert_apellido();
    persona.alert_dni();
    persona.alert_direccion();
}

class Curso{
    constructor(){
        this.nombre="DAW";
        this.codigo=124; // si comienza con 0 genera un error -> refixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead
        this.tutor="Marcius";
        this.numero_alumnos=15;
        this.anho=2019;
    }

    get_codigo(){
        return this.codigo;
    }
    get_numero_alumnos(){
        return this.numero_alumnos;
    }
    get_anho(){
        return this.anho;
    }
}
function miFuncion11() {
    let curso = new Curso();
    alert("Código del curso: "+curso.get_codigo()+". Número de alumnos: "+curso.get_numero_alumnos()+". Año del curso: "+curso.get_anho())
}

function miFuncion12() {
    let array_daw1=[];
    array_daw1[0]="Servidor";
    array_daw1[1]="Cliente";
    array_daw1[2]="Diseño";
    array_daw1[3]="Despliegue";
    array_daw1[4]="Empresa";

    let array_daw2=[];
    array_daw2['asignatura1']="Servidor";
    array_daw2['asignatura2']="Cliente";
    array_daw2['asignatura3']="Diseño";
    array_daw2['asignatura4']="Despliegue";
    array_daw2['asignatura5']="Empresa";

    let array_daw3=[];
    array_daw3.asignatura1="Servidor";
    array_daw3.asignatura2="Cliente";
    array_daw3.asignatura3="Diseño";
    array_daw3.asignatura4="Despliegue";
    array_daw3.asignatura5="Empresa";

    console.log(Array.from(array_daw1));
    //Para imprimir la info de los siguientes arrays hay que usar foreach;
    console.log(Array.from(array_daw2['asignatura1']));
    console.log(Array.from(array_daw3.asignatura1));

    document.getElementById('p_ejer12').innerHTML=array_daw1; 
}

function miFuncion13() {
    let daw1={
        'asignatura1':"Programación",
        'asignatura2':"Base de datos",
        'asignatura3':"Sistemas informaticos",
        'asignatura4':"Entornos",
        'asignatura5':"Lenguaje de marcas",
        'asignatura6':"Formación profesional"
    }
    //Forma para iterar un array json
    for (var key in daw1) {
        document.getElementById('p_ejer13').innerHTML+=key+"=>"+daw1[key]+"<br>";
      } 
}

class Alumno{
    constructor(nombre, apellido, dni, curso) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.curso=curso;
    }
    get_nombre(){
        return this.nombre;
    }
    get_apellido(){
        return this.apellido;
    }
    get_dni(){
        return this.dni;
    }
}
function miFuncion14() {
    let alumno = new Alumno("Camilo", "Gómez", "12345", "DAW2");
    document.getElementById('p_ejer14').innerHTML="DATOS DEL ALUMNO <br>";
    document.getElementById('p_ejer14').innerHTML+="Nombre: "+alumno.get_nombre()+"<br>";
    document.getElementById('p_ejer14').innerHTML+="Apellido: "+alumno.get_apellido()+"<br>";
    document.getElementById('p_ejer14').innerHTML+="DNI: "+alumno.get_dni();
}