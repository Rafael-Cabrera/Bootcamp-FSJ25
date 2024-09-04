/*
Solicitar un numero entero y determine si es un número par o impar.
*/

function numeroParImpar(numero){
    let respuesta = '';
    if (numero % 2 == 0){
        respuesta = `El número ${numero} es par.`;
    } else {
        respuesta = `El número ${numero} es impar.`;
    }
    return respuesta;
}

console.log(numeroParImpar(3));
console.log(numeroParImpar(2));
