//Programación orientada a objetos.
//Es una forma de programar intentando describir o pensar las cosas como si fueran objetos
//Conceptos principales a POO --> Clases y los objetos
//Clase -> molde para generar algo.
//Objeto -> lo que podesmo crear en base a ese molde
// Declaraacion de clase
var Autos = /** @class */ (function () {
    //Constructor -> metodo reservado que nos sirve para instanaciar objetos.
    function Autos(numchasisParam, motorParam) {
        this.numChasis = numchasisParam;
        this.motor = motorParam;
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
var autito = new Autos(123, 'motor123');
console.log(autito);
//Agregar una propiedad al objeto.
//autito.modelo = "Corolla";
//console.log(autito);
