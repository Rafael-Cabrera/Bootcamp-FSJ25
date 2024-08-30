//Estructuras de control -> condicionales

// IF ELSe --> EVALUAR CASOS VERDADEROS Y FALSOS

let condicion = 10 === "10";

if(condicion){
    console.log("Este código se ejecuta en caso true");
}else{
    console.log("Este código se ejecuta si es false");
}


/*
MAYOR QUE >
MENOR QUE <
MENOR O IGUAL <=
MAYOR O IGUAL >=
*/




// Operador ternario
// Reemplazo de sitanxis para IF ELSE
// CONDICION ? CODIGO TRUE : CODIGO FALSE;
10 < 10 ? console.log("Afirmativo") : console.log("Negativo");

// IF ELSE IF
let variableAux = 3;
if(variableAux > 10){
    console.log("Afirmativo");
}else if(variableAux > 5){
    console.log("Afirmativo");
}else{
    console.log("No cumplio con las espectativas.");
}

let variableAux = 8;
if(variableAux>10 && variableAux>5){
    console.log("Esta es la respuesta true.")
}else{
    console.log("Esta es la respuesta false.")
}
