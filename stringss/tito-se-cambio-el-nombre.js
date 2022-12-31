//metodos mas usados

let str = "string soy un hola"
console.log('str.length :>> ', str.length);

let slice_str = str.slice(0,15);
slice_str

let sustring = str.substring(0,6)
sustring

let sustring2 = str.substr(5,10)
sustring2

let cadena = " hola mi nombre es queteimporta.com";
let cadenarep = cadena.replace('queteimporta.com', 'nicolatenes');
cadenarep

let testoLargo = "tito es un mono, a tito le gusta la banana, y tambien quiere estar en los arboles, porque le tiene miedo al agua, sin embargo tito vive en un pantano, cada tanto tito se cae, porque es bastante idiota. No seas como tito"

//solo cambia la primer coincidencia
testoLargo = testoLargo.replace('tito', 'Pene');
//cambia todas las coincidencias de la primer instancia, por la segunda.
testoLargo = testoLargo.replace(/tito/g, 'Pene');

let testoFinal = "todos aman a Penelope, por eso le dicen pene de cariño.";
console.log('testoLargo :>> ', `${testoLargo} ${testoFinal}`  );