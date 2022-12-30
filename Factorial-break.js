let factorial = 10;
let resultado = 1;

let indice = 1;

while (true){
    resultado *= indice;
    console.log(resultado);
    if(indice >= factorial){
        break
    }
    indice++;
}