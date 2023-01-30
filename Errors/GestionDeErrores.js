//Gestion de Errores

 function SumaPorSiMismo(numero){
     if (typeof numero === "number"){
        return numero += numero;
     }
     throw new Error(`El Parametro NO debe ser un tipo: ${typeof numero}`);
 }

 let noesnumero = "4";
 try{
    const add = SumaPorSiMismo(noesnumero);
    console.log(add);
 } catch(e){
    console.error(e);
 }finally{
    if (typeof noesnumero != "number"){
        console.error("debes cambiar el tipo de variable a number")
    }
}