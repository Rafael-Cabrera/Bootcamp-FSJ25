/*
Ejericio 1: Solicitar un número entero, determine y muestre si dicho número es negativo, positivo o
cero. Usando switch
*/

const miNumero = 0;


function positivoNegativoCero(numero){
    let respuesta = "";
    if (numero > 0 ) return `El numero ${numero} es positivo.`
    else if (numero == 0) return `El número es cero.`
    return `El número ${numero} es negativo.`
} 

console.log(positivoNegativoCero(miNumero));
