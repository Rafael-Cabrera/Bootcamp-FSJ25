//Declaracion de variables en TS
let variable = "Rafa";

//Declaracion de variable + tipo de datos TS
let cadenaTexto:string;
cadenaTexto = "Rafa";
let numero:number = 11.9;
let boolean:boolean = false;

//Tipos de datos complejos
let arraycito:string[] = ["rafa","el","anto","nio"];
let arrayNumero:number[] = [1,2,3,4,5,6];

//NUNCA UTILIZAR ESTO
let arrayMalo:any[] = [];

// Array numerico o string
let arrayNumString:number[]|string[] = [""];
let arrayNumString2:(number|string)[] = [12,13,14,15,16];
let arrayNumOString: number[]|string[] = [123,456,789];

//Declaracion de duplas
//Es una array con indice limitados y con sus tipos de datos declarado previamente.
let datosUsuario:[string,number];
datosUsuario = ["Rafa",51];


//Funciones en typeScript
// Tipo void
function tipoVoid():void {
    console.log("Jelous");
}

function sumar():number {
    return 2+2;
}

function sumarOConcatenar():number|string {
    return 3+5;
}

function saludar(nombre:string):string {
    return `Hola,  ${nombre}`;
    //return 'Hola, ' + nombre;
}


console.log(saludar('Rafa'));