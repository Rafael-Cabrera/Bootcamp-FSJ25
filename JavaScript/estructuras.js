//Estructuras de control -> condicionales

// IF ELSe --> EVALUAR CASOS VERDADEROS Y FALSOS

/*
let condicion = 10 === "10";

if(condicion){
    console.log("Este código se ejecuta en caso true");
}else{
    console.log("Este código se ejecuta si es false");
}
*/

/*
MAYOR QUE >
MENOR QUE <
MENOR O IGUAL <=
MAYOR O IGUAL >=
*/



/*
// Operador ternario
// Reemplazo de sitanxis para IF ELSE
// CONDICION ? CODIGO TRUE : CODIGO FALSE;
10 < 10 ? console.log("Afirmativo") : console.log("Negativo");

// IF ELSE IF
let variableAux1 = 3;
if(variableAux > 10){
    console.log("Afirmativo");
}else if(variableAux1 > 5){
    console.log("Afirmativo");
}else{
    console.log("No cumplio con las espectativas.");
}

let variableAux2 = 8;
if(variableAux2>10 && variableAux2>5){
    console.log("Esta es la respuesta true.")
}else{
    console.log("Esta es la respuesta false.")
}
*/


// Estructuras repetitivas o bucles

// while -> mientras
// while (condicion de corte) {código a ejecutar}
/*
let numero = 3;
while(numero < 10 && numero > 2){
    console.log(numero);
    numero++;
}

// DO WHILE 
// HACER MIENTRAS
let numero2 = 1;
do{
    console.log(numero2);
    numero2++;
}(numero2 < 10 && numero2 >= 2)

*/

/*
// FOR (INICIALIZACION ; CONDICION DE CORTE ; INCREMENTO/DECREMENTO) {CODIGO A EJECUTAR}
for(let numero = 1; numero < 10; numero++){
    console.log(numero);
}
*/
// FASE 1 = INICIALIZACION + CONDICION DE CORTE + EJECUTAR + INCREMENTO/DESCREMENTO
// FASE 2 = CONDICION DE CORTE + EJECUTAR + INCREMENTO/DESCREMENTO


// Estrcutura de datos COMPLEJA
// ESTRUCTURA DE DATO SIMPLE let variable1 = "Rafa";
// ARRAY
let cohorteFSJ25 = ["Rafa","Isis","Gulle","Bryan","Eduardo","Karla","Claudia","Jared",23.5,true];
console.log(variableCompleja);
console.log(cohorteFSJ25);

// Metodos de array
// Agregar valores al final de un array
let variableCompleja = [];
variableCompleja.push("Jairo");
variableCompleja.push(26);
console.log(variableCompleja);

// Eliminar el último valor de un array
let datoEliminado = variableCompleja.pop();
console.log(variableCompleja);
console.log(datoEliminado);

// Agregar un valor al principio de un array
variableCompleja.unshift("Jorge");
console.log(variableCompleja);

// Eliminar el primer elemento de un array
let datoEliminadoPrincipio = variableCompleja.shift();
console.log(variableCompleja);
console.log(datoEliminadoPrincipio);

// PROPIEDAD DE ARRAY
// Averiguar el largo de un array.
console.log("Largo del array: ");
let largor = variableCompleja.length;
console.log(largor);


// Imprimir todos los valores de un array numérico
function recorrerArray(array){
    if(array.length == 0){
        return array;
    }
    // Code goes here
    for (let i = 0; i < 5; i++){
        console.log(array[i]);
    }
}

let array = [1,2,3,4];
recorrerArray(array)