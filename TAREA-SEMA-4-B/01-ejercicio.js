/*
Ejericio 1: Solicitar un número entero, determine y muestre si dicho número es negativo, positivo o
cero. Usando if else
*/

const miNumero = 0;


function positivoNegativoCero(numero){
    let respuesta = "";
    if (numero > 0 ){
        respuesta = `El numero ${numero} es positivo.`;
    } else if (numero == 0){
        respuesta = `El número es cero.`;
    }else {
        respuesta = `El número ${numero} es negativo.`;
    } 
    return respuesta;  
} 

console.log(positivoNegativoCero(miNumero));
