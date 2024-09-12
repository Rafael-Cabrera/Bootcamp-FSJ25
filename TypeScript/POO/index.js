//Programación orientada a objetos.
//Es una forma de programar intentando describir o pensar las cosas como si fueran objetos
//Conceptos principales a POO --> Clases y los objetos
//Clase -> molde para generar algo.
//Objeto -> lo que podesmo crear en base a ese molde
// Declaraacion de clase
var Autos = /** @class */ (function () {
    //Constructor -> metodo reservado que nos sirve para instanaciar objetos.
    function Autos(pNumChasis, pMotor, pColor, pTipoCombustible, pTransmision, pCantKilometraje, pPlazas, pFrenos, pModelo, panioFab) {
        this.numChasis = pNumChasis;
        this.motor = pMotor;
        this.color = pColor;
        this.tipoCombustible = pTipoCombustible;
        this.transmision = pTransmision;
        this.cantKilometraje = pCantKilometraje;
        this.plazas = pPlazas;
        this.frenos = pFrenos;
        this.modelo = pModelo;
        this.anioFab = panioFab;
    }
    //Metodos -> acciones
    Autos.prototype.encender = function () {
        console.log("Brum re brum");
    };
    Autos.prototype.apagar = function () {
        console.log("Tan Tan");
    };
    return Autos;
}());
//Instanciar objetos a traves de una clase -> Crear un objeto
var autito = new Autos(12345, '2xyd3l', 'Negro', 'Gasolina', 'Automatica', '100', 5, 'ABS', 'Lancer', 2015);
console.log(autito);
//Agregar una propiage al objeto.
autito.motor = "v12";
console.log(autito);
