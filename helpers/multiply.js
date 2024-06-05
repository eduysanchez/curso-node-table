const fs = require("fs");

const createFileMultiply = async (base, until, listar) => {
  try {
    const nameFile = `Table of ${base}`;
    let file = "";

    file += `============\n`;
    file += `${nameFile}\n`;
    file += `============\n`;

    for (let index = 1; index <= until; index++) {
      file += `${base} x ${index} = ${base * index}\n`;
    }
    await fs.writeFileSync(`./tables/${nameFile.replace(/ /g, "-")}.txt`, file);

    if (listar) {
      console.log(applyColorToFileLog(file));
    }

    return `${nameFile} saved`;
  } catch (error) {
    throw error;
  }
};

function applyColorToFileLog(text) {
  let result = "";

  for (let char of text) {
    if (/\d/.test(char)) {
      result += char.red;
    } else {
      result += char.green;
    }
  }

  return result;
}

module.exports = {
  createFileMultiply,
};
