var numberHelper = require('./NumberHelper');
var matrixHelper = require('./MatrixHelper');

function mathLib() {
  return {
    numberHelper: numberHelper,
    matrixHelper: matrixHelper
  }
}

module.exports = mathLib;
