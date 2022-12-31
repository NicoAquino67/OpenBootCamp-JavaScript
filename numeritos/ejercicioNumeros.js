let heightINT = 175;
let heightFLOAT = 1.75;
let weightFLOAT = 78.7;
let roundedHeight = heightFLOAT.toFixed();
console.log(roundedHeight)
let roundedWeight = parseInt(weightFLOAT);
console.log(roundedWeight)
let val = 2 ** 1024;
if (val > Number.MAX_VALUE ) {
    val = Number.MAX_VALUE;
    console.log(`val es el maximo valor que puede obtener JS: ${val}`);
}