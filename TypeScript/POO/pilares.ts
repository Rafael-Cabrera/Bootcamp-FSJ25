// 4 pilares de POO

/*
  *  Herencia -> capacidad de una subclase de obtener todo de su clase
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

    
    getAge(){
        return this.age;
    }
    
    getDui(){
        return this.dui;
    }
    
    setAge(ageParam:number){
        this.age = ageParam;
    }

}

let personita = new Person('Rafa', 51, '123456789');

//personita.name = 'Nombre';
//personita.respirar

console.log(personita);


class Developer extends Person{
    private exp:number;
    private techSkill:string[];
    private softSkills:string[];
    private gitUser:boolean;
    private area:string;
    private projects:string[];

    constructor(nameParam:string, ageParam:number, duiParam:string, expParam:number, techSkillParam:string[], softSkillsParam:string[], gitUserParam:boolean, areaParam:string, projectsParam:string[]){
        super(nameParam, ageParam, duiParam); //acceder propiedad de la clase padre.
    }

    getAre(){
        return this.area;
    }
    respirar():void {
        console.log('Snigg');
    }


}

let developercito = new Developer('Rafa', 51, '123456789',3,['uno','dos','tres'],['com','djdj'],true,'seguros',['pro','lider']);
developercito.getAge();

personita.respirar();
developercito.respirar();