const Name = "Nicolas       ";
const surname = '    Aquino';
let state = `  Estudiante: ${Name} ${surname}              `;

let stateUPPER = state.toUpperCase();
console.log('stateUPPER :>> ', stateUPPER);

let stateLOWER = state.toLowerCase();
console.log('stateLOWER :>> ', stateLOWER);

const howManyCharHave = state.length;
console.log(` state tiene :>> ${howManyCharHave} caracteres`);

let firstCharName = state[state.indexOf(Name)];
console.log('firstCharName :>> ', firstCharName);

let lastCharSurname = state[state.lastIndexOf(surname) + surname.length -1];
console.log('lastCharSurname :>> ', lastCharSurname);

//you don`t need to do it this way, it is just for using the functionalities in a different way.
let noSpace = (str) => {
    return str.trim();
};
console.log('state :>> ',`${noSpace(state)}` );

let haveName = state.includes(Name);
console.log('haveName :>> ', haveName);