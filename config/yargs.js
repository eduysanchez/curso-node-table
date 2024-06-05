const argv = require("yargs")
  .option("b", {
    alias: "base",
    default: 0,
    demandOption: true,
    describe: "It is the base of the table",
    type: "number",
  })
  .option("u", {
    alias: "until",
    default: 10,
    describe: "It is the range to which the table goes",
    type: "number",
  })
  .option("l", {
    alias: "listar",
    default: false,
    demandOption: true,
    describe: "Show the table in console",
    type: "boolean",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "The base must be a number";
    }
    return true;
  }).argv;

module.exports = argv;
