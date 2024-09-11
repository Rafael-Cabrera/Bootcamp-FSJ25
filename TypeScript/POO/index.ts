//Programación orientada a objetos.
//Es una forma de programar intentando describir o pensar las cosas como si fueran objetos

//Conceptos principales a POO --> Clases y los objetos
//Clase -> molde para generar algo.
//Objeto -> lo que podesmo crear en base a ese molde

// Declaraacion de clase

class Autos{
    //Caracteristicas
    numChasis:number;
    motor:string;
    color:string;
    tipoCombustible:string;
    transmision:string;
    cantKilometraje:string;
    plazas:number;
    frenos:string;
    modelo:string;
    añoFab:number;

    //Constructor -> metodo reservado que nos sirve para instanaciar objetos.
    constructor(pNumChasis:number, pMotor:string, pColor:string, pTipoCombustible:string, pTransmision:string, pCantKilometraje:string, pPlazas:number, pFrenos:string, pModelo:string, pAñoFab:number){
        this.numChasis=pNumChasis;
        this.motor=pMotor;
        this.color=pColor;
        this.tipoCombustible=pTipoCombustible;
        this.transmision=pTransmision;
        this.cantKilometraje=pCantKilometraje;
        this.plazas=pPlazas;
        this.frenos=pFrenos;
        this.modelo=pModelo;
        this.añoFab=pAñoFab;
    }
    //Metodos -> acciones
    encender():void {
        console.log("Brum re brum");
    }

    apagar():void {
        console.log("Tan Tan");
    }
}

//Instanciar objetos a traves de una clase -> Crear un objeto
let autito:Autos = new Autos(12345, '2xyd3l', 'Negro', 'Gasolina', 'Automatica', '100', 5, 'ABS', 'Lancer', 2015);

console.log(autito);

//Agregar una propiedad al objeto.
//autito.modelo = "Corolla";
//console.log(autito);
