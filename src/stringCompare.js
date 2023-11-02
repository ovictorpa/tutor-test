const { readFileSync } = require('fs');

function checkIfContainsSync(filename, str) {
    const contents = readFileSync(filename, 'utf-8');
  
    const result = contents.localeCompare(str);
  
    return result;
  }

module.exports = {checkIfContainsSync}