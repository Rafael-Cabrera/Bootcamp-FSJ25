//Declaracion de variables en TS
var variable = "Rafa";
//Declaracion de variable + tipo de datos TS
var cadenaTexto;
cadenaTexto = "Rafa";
var numero = 11.9;
var boolean = false;
//Tipos de datos complejos
var arraycito = ["rafa", "el", "anto", "nio"];
var arrayNumero = [1, 2, 3, 4, 5, 6];
//NUNCA UTILIZAR ESTO
var arrayMalo = [];
// Array numerico o string
var arrayNumString = [""];
var arrayNumString2 = [12, 13, 14, 15, 16];
var arrayNumOString = [123, 456, 789];
//Declaracion de duplas
//Es una array con indice limitados y con sus tipos de datos declarado previamente.
var datosUsuario;
datosUsuario = ["Rafa", 51];
//Funciones en typeScript
// Tipo void
function tipoVoid() {
    console.log("Jelous");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 3 + 5;
}
function saludar(nombre) {
    return "Hola,  ".concat(nombre);
    //return 'Hola, ' + nombre;
}
console.log(saludar('Rafa'));
