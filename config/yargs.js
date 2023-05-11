const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar".yellow,
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muestra la tabla en consola".yellow,
    },
    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "Permite definir hasta que número calcular la tabla".yellow,
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) {
      throw "El parámetro hasta debe ser numerico";
    }

    return true;
  }).argv;

module.exports = argv; // Exportación por defecto
