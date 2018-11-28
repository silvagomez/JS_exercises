function miFuncion1_3() {
    prompt('Hola mundo cruel!');
    alert('Adios mundo cruel!');   
}

function miFuncion1_4() {
    var valor = document.getElementById('txt1').value;
    alert(valor);
}

function miFuncion1_5() {
    var valor = document.getElementById('txt2').value;
    alert(valor);
}

function miFuncion1_6() {
    var valor = document.getElementById('num1').value;
    if (valor==null || valor==0) {
        alert("Debes introducir un número")
    }else{
        ParImpar(valor);
    }
}

function ParImpar(numero) {
    if (numero%2==0) {
        alert(numero +" es par");
    } else {
        alert(numero+" es impar");
    }
}

function miFuncion1_7() {
    var valor1 = document.getElementById('num2').value;
    var valor2 = document.getElementById('num3').value;

    var op = document.getElementById('operacion').value;

    switch (op) {
        case "+":
            // var resul = valor1+valor2; // se concatena de esta forma
            var resul = Number(valor1)+Number(valor2);
            // var resul = parseInt(valor1)+parseInt(valor2);
            alert("El resultado de sumar " + valor1 + " + " + valor2 + " = "+resul);
            break;

        case "-":
            var resul = valor1-valor2;
            alert("El resultado de restar " + valor1 +" - "+ valor2 +" = "+resul);
            break;

        case "*":
            var resul = valor1*valor2;
            alert("El resultado de multiplicar " + valor1 +" * "+ valor2 +" = "+resul);
            break;

        case "/":
            var resul = valor1/valor2;
            alert("El resultado de dividir " + valor1 +" / "+ valor2 +" = "+resul);
            break;
    
        default:
            alert("Seleccione una operación");
            break;
    }
    
}

function miFuncion1_8() {
    var valor1 = document.getElementById('num4').value;
    var valor2 = document.getElementById('num5').value;

    var op = document.getElementById('operacion2').value

    switch (op) {
        case "+":
            // var resul = valor1+valor2; // se concatena de esta forma
            var resul = Number(valor1)+Number(valor2); // hay que darle formato de número o int
            // var resul = parseInt(valor1)+parseInt(valor2);
            var msn=("El resultado de sumar " + valor1 + " + " + valor2 + " = "+resul);
            document.getElementById('respuesta').value=msn;
            break;

        case "-":
            var resul = valor1-valor2;
            var msn=("El resultado de restar " + valor1 +" - "+ valor2 +" = "+resul);
            document.getElementById('respuesta').value=msn;
            break;

        case "*":
            var resul = valor1*valor2;
            var msn=("El resultado de multiplicar " + valor1 +" * "+ valor2 +" = "+resul);
            document.getElementById('respuesta').value=msn;
            break;

        case "/":
            var resul = valor1/valor2;
            var msn=("El resultado de dividir " + valor1 +" / "+ valor2 +" = "+resul);
            document.getElementById('respuesta').value=msn;
            break;
    
        default:
            alert("Seleccione una operación");
            break;
    }
    
}

function miFuncion1_9() {
    var letra = document.getElementById('carac').value;
    var total=letra.length;
    letra=letra.split("");
    alert("Total de caracteres: "+total);
    for (let x = 0; x < total; x++) {
        alert(letra[x]);
        
    }
}

function miFuncion1_10() {
    var num="1 ";
    for (let x = 2; x <= 100; x++) {
        num=""+num+x+" ";
    }
    document.getElementById('area').value=num;    
}

function miFuncion1_11() {
    var valor=document.getElementById('num6').value;
    console.log(valor);
    var num="1 ";
    for(let x = 2; x <=valor;x++){
        num=""+num+x+" ";
    }
    document.getElementById('area2').value=num; 
}

function miFuncion1_12() {
    var num1=document.getElementById('num7').value;
    var num2=document.getElementById('num8').value;

    var array_multi=[];
    nomulti=0;
    // alert(num1);
    // alert(num2);

    if (array_multi[0] === undefined) {
        console.log('this sucks');
    } else {
        console.log('it works');
    }

    for (var x = 1; x<=num1; x++) {
        if (num2%x==0) {
            array_multi.push(x)
            document.getElementById('area3').value=array_multi;
            console.log(array_multi);
        }else {
            nomulti++;
        }
    }
    pal="\nCantidad de número no múltiplos "+array_multi.length;
    document.getElementById('area3').value+=pal;
}

function miFuncion1_13() {
    numero=document.getElementById('num9').value;
            var num_primo=[];
            noprimo=0;
            for (x=1; x <=numero ; x++) {
                alerta=true;
                console.log("x es "+x+"\n");
                for (y=2; y <=x-1 ; y++) {
                    console.log(y+"\t"+x+"\n"); //Para conocer que números entran en el segundo for
                    console.log(y<=x-1);
                    if (x%y==0) {
                        //console.log(x);
                        noprimo++;
                        alerta=false;
                        break;
                    }
                }
                if(alerta==true) {
                    num_primo.push(x);
                }
                document.getElementById('area4').value=num_primo;
            }
            palo="\nCantidad de número no primos "+noprimo;
            document.getElementById('area4').value+=palo;
}

function miFuncion1_14() {
    alert("eval() es una función peligrosa, quel ejecuta el código el cual es pasado con los privilegios de quien llama.  Si ejecuta eval() con una cadena de carcteres que podría ser afectada por un elemento malicioso, podría terminar ejecutando código malicioso dentro de la computadora del usuario con los permisos de su página o extensión web .")

    var objeto_window_referencia;
      objeto_window_referencia = window.open('https://developer.mozilla.org/es/docs/Web/JavaScript');


}