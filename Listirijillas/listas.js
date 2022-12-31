//listas, arrays, arreglos, vectores

let array = [1, 2, 3, 4, 5, 6];
let var1 = { id: false };
let arra = [1, "e", var1, { id: 35 }];

console.log(arra);

//acceder a los valores del array a traves del indice - 1
console.log(arra[6]);

//modificaciones del array
// .push() .unshift() => mutan el array
// .push añade objetos al final del array
arra.push("hola", 34, false);
console.log(arra);

// .unshift añade objetos al principio del array
arra.unshift("adios", 2, false);
console.log(arra);

// .pop => quita al final
arra.pop();
console.log(arra);

// .shift => quita al principio
arra.shift();
console.log(arra);

// metodo facil.
// .splice(x,y,z)

var lista = [1, 2, 3, 4, 5, 6];
lista.splice(6, 0, 'hola?');

console.log(lista)