function NoParams(){
    console.log("esta funcion no resibe ningun parametro");
    return true
}
const noParams = NoParams();
console.log('noParams :>> ', noParams);

//const aSyncGreeting = setTimeout(() => {console.log("Hola soy una promesa")}, 5000 );

function* EvenIndex(){
    let id = 0;
    let itsEven = true;
    while(itsEven){
            id += 2;
            yield id
    }
}
const evenID = EvenIndex();
console.log('evenID :>> ', evenID.next());
console.log('evenID :>> ', evenID.next());
console.log('evenID :>> ', evenID.next());
console.log('evenID :>> ', evenID.next());
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
console.log('evenID :>> ', evenID.next()); 
