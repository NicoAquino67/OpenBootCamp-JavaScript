const hoy = new Date();

class Persona {
    name;
    age;
    isDev;

    constructor(nombre, edad, isDev){
        this.name = nombre;
        this.age = edad;
        this.isDev = isDev;
    }

    Greeting(){
        console.log(`hi!, my name is ${this.name}, and i\`m ${this.age} years old`);
    }
}

const listaPersona = new Persona("Nicolas", 25,true);

console.log(listaPersona.Greeting())