//Importacion de Modulos

const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

//Gestion de Errores

function SumaPorSiMismo(numero){
  if (typeof numero === "number"){
     return numero += numero;
  }
  throw new Error(`El Parametro NO debe ser un tipo: ${typeof numero}`);
}

let noesnumero = "4";
try{
 const add = SumaPorSiMismo(4);
 console.log(add)
 logger.log(add);
} catch(e){
 logger.error(e);
}finally{
 if (typeof noesnumero === "number"){
     logger.error("debes cambiar el tipo de variable a number")
 }
}