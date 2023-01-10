const PersonalData = {
    name: "Nicolas",
    surName: "Aquino",
    age: 25,
    height: 175,
    areDeveloper: true
}

let edadPersona = PersonalData.age;

const friend1 = {
    name: "Juan",
    surName: "Pordiosero",
    age: 28,
    height: 125,
    areDeveloper: true
}
const friend2 = {
    name: "Marcos",
    surName: "Tado",
    age: 20,
    height: 205,
    areDeveloper: false
}

const personas =[PersonalData, friend1, friend2];

personas.sort((a,b)=>a.age - b.age)
console.log(personas)