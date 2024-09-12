// 4 pilares de POO

/*
    Herencia
    Poliformismo

    1) Encapsulamiento -> Limitar el acceso a algo a traves de MODIFICADORES DE ACCESO
    2) Abstraccion -> Nos da herramientas 

*/

/*
    Modificadores de acceso
    public -> Todo el mundo puede acceder
    private -> Solo la misma clase va a tener acceso
    protected -> Va a tener acceso la misma clase y sus hijos.
*/

class Person{

    private name:string;
    private age:number;
    private dui:string;

    constructor(nameParam:string, ageParam:number, duiParam:string){
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    //Metodo respirar
    respirar(){
        console.log('Afff');
    }

    //Getters y setters
    getName():string {
        return this.name;
    }

    setAge(ageParam:number){
        this.age = ageParam;
    }

}

let personita = new Person('Rafa', 51, '123456789');

//personita.name = 'Nombre';
//personita.respirar

console.log(personita);
