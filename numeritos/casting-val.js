//como usar los numeritos we

let a = 5;
let b = 0.2;
let c = 0.7;

a = 3.5;
b = 4.8;

//suma
let suma = a + b;
console.log('suma :>> ', suma);

//resta
let resta = b - a;
console.log('resta :>> ', resta);

//multiplicacion
let multiplicacion = a * b;
console.log('multiplicacion :>> ', multiplicacion);

//division
let division = b/a;
console.log('division :>> ', division);

//Cambiar el tipo de variable
let aStr = a.toString();
console.log(a, aStr);
console.log(typeof a, typeof aStr);

// Redondear numeros decimales
let d = c * 3;
let f = 19245912312412512347747382;
console.log('d :>> ', d);
// .toFixed(x) - limita el numero de decimales al parametro dado, pero lo convierte a un string.
console.log('d :>> ', d.toFixed(18));

// .toPrecision(x) - limita el numero de cifras significativas, pero lo convierte a un string.
console.log(d.toPrecision(18));
console.log(f.toPrecision(4));


//Obtener Valores
a = 2;

b = new String(42.5867); //Casting: obliga a la variable a ser un Number

console.log(b)

console.log()
c = a + parseInt(b).toPrecision(10);
console.log(c);

c = a + Number(b).toPrecision(10);
console.log(c);

c = a + parseFloat(b).toPrecision(10);
console.log(c);

let str = new String("hola");

console.log(str)

let numHex = '0xffffff'

console.log(parseInt(numHex))


let minPres = Number.EPSILON;
let minVal = Number.MIN_VALUE;
let maxVal = Number.MAX_VALUE;

console.log(minPres);
console.log(minVal)
console.log(maxVal)
