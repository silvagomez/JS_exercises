function factorial(n){ //función recursiva para obtener el factorial de un número
    if (n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
function resultado(func,num) { // recibe una función y un número
    document.getElementById('e1').innerHTML="El factorial de "+num+" es "+ func(num);
}
function miFuncion2_6_2() {
    var nfactorial = 6;
    resultado(factorial,nfactorial); 
}