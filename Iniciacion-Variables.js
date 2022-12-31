var variable = 2;
let variablelet = 322;
const constante = 3.14;

console.log(variable);
console.log(variablelet);
console.log(constante);

let variablelocal = null; // variable definida, pero con el espacio de memoria asignado, vacio
let variableUndef; // variable no definida, no tiene espacio de memoria asignado.
if (true) {
  var variableglobal = 2;
  let variablelocal = 3;
  console.log("variableglobal :>> ", variableglobal);
  console.log("variablelocal :>> ", variablelocal);
}
console.log("variableglobal :>> ", variableglobal);
console.log("variablelocal :>> ", variablelocal);
