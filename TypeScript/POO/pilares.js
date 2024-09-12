// 4 pilares de POO
/*
    Encapsulamiento
    Abstraccion

    Herencia
    Poliformismo

*/
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    //Metodo respirar
    Person.prototype.respirar = function () {
        console.log('Afff');
    };
    return Person;
}());
var personita = new Person('Rafa', 51, '123456789');
personita.name = 'Nombre';
//personita.respirar
console.log(personita);
