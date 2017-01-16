function MatrixHelper() {
  /*
  * Solves a series of simultaneous equtions using Gauss Jordan Elimination.
  * @param {Number[Number[]]} input - A matrix is an array of arrays of numbers.
  * Hence, the input is an array of arrays of numbers that describes the augmented
  * matrix which is an input to the method.
  * For example, for equations (2x + 3y = 5) and (7x + 10y = 17), the augmented
  * matrix that is to be passed as an input is as follows:
  * input = [[2, 3, 5], [7, 10, 17]];

  * @returns {[Number[]} - An array of array of numbers - an array output consisting
  * of the rightmost column of the augmented matrix.
  */
  function gaussianElimination(input) {
    var output = input;
    var result = [];
    var check = isMatrixValid(output);

    if (!check) {
      var numRows = output.length;
      var numCols = output[0].length;

      for (var i = 0; i < numRows; i++) {
        var constantRow = output[i];
        for (var j = i + 1; j < numRows; j++) {
          var currentRow = output[j];
          var rowMultiplier = -constantRow[i] / currentRow[i];
          for (var k = i; k < currentRow.length; k++) {
            currentRow[k] = constantRow[k] + currentRow[k] * rowMultiplier;
          }
        }
      }

      for (var i = numRows - 1; i > -1 ; i--) {
        var constantRow = output[i];
        for (var j = i - 1; j > -1; j--) {
          var currentRow = output[j];
          var rowMultiplier = -constantRow[i] / currentRow[i];
          for (var k = 0; k < currentRow.length; k++) {
            currentRow[k] = constantRow[k] + currentRow[k] * rowMultiplier;
          }
        }
      }

      for (var g = 0; g < numRows; g++) {
          result.push(output[g][numCols - 1] / output[g][g]);
      }
      return result;
    } else {
      return check;
    }
  }

  function isMatrixValid(input) {
    if (!Array.isArray(input)) {
      return Error('input is not an array of arrays');
    } else {
      var numRows = input.length;
      if (numRows < 2) {
        return Error('input has to have more than one row');
      } else {
        for (var i = 0; i < numRows; i++) {
          if(!Array.isArray(input[i])) {
            return Error('every element of the input array has to be an array');
          } else {
            for (var j = 0; j < input[i].length; j++) {
              var numCols = input[i].length;
              if (numCols !== numRows + 1) {
                return Error('mismatch between number of equations and number of unknowns');
              } else {
                if(typeof input[i][j] !== 'number') {
                  return Error('input matrix is not numeric');
                }
              }
            }
          }
        }
      }
    }
    return null;
  }

  return {
    gaussianElimination: gaussianElimination
  }

}

module.exports = MatrixHelper;
