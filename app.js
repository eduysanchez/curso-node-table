const { createFileMultiply } = require("./helpers/multiply");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

createFileMultiply(argv.b, argv.u, argv.l)
  .then((msg) => console.log(colors.rainbow(msg)))
  .catch((err) => console.log(err));
