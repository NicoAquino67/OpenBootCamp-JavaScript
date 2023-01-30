const logger = require("./logger");

//Gestion de Errores

function SumaPorSiMismo(numero) {
  if (typeof numero === "number") {
    return (numero += numero);
  }
  throw new Error(`El Parametro NO debe ser un tipo: ${typeof numero}`);
}

let noesnumero = "4";
try {
  const add = SumaPorSiMismo(noesnumero);
  logger.debug(add);
} catch (e) {
  logger.debug(e);
} finally {
  if (typeof noesnumero != "number") {
    logger.error("debes cambiar el tipo de variable a number");
  }
}
