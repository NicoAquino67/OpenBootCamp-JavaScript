//listas - array - arreglo
const Lista = [1, "24", true, undefined, null];
console.log("Lista :>> ", Lista);

const lista2 = new Array(1, "24", true, undefined, "lista2");
console.log("lista2 :>> ", lista2);

const list3 = new Array(3);
list3[0] = 1;
list3[1] = 2;
list3[2] = [Lista, lista2];
console.log("list3 :>> ", list3);

//objetos

const Movil = {
  altura: 25,
  ancho: 12,
  marca: "morotola",
  isWhite: false,
  contactos: ["Raul", "Julio", "miriam"],
  tarjeta: {
    marca: "Sandisk",
    almacenamiento: 32,
  },
  "Altura-Tarjeta": 4,
};
Movil.anio = 2022;
console.log("Movil.anio :>> ", Movil.anio);

Movil.isWhite = true;
console.log("Movil.is :>> ", Movil.isWhite);

// fechas

const ahora = new Date();
const fecha = new Date(51234123123); //pasar dato en milisegundos
console.log("fecha :>> ", fecha);

const fecha_cadena = new Date("march 25 2020"); //pasar dato en una cadena, con la fecha en ingles
console.log("fecha_cadena :>> ", fecha_cadena);

const fecha_valor = new Date(2023, 4, 23); //pasar dato en formato numerico, año, mes - 1, dia
console.log("fecha_valor :>> ", fecha_valor);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anio = ahora.getFullYear();

console.log(dia, mes, anio);
