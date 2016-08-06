function NumberHelper() {
  /*
  * Checks if the input number is a prime number or not
  * @param {Number} input - Postitive integer
  * @returns {Boolean} - true if input is a prime number, false if number is not a prime number, Error if input is not a positive integer, Error if input is larger than the largest integer supported by Javascript
  */
  function checkPrime(input) {
    if(Number.isInteger(input) && input > 0) {
      if(input < Number.MAX_SAFE_INTEGER) {
        var upperBound = Math.round(Math.sqrt(input));
        for (var i = 2; i < upperBound; i++) {
          if(input % i == 0) {
            return false;
          }
        }
        return true;
      }
      else {
        return Error('input exceeds largest number supported by Javascript');
      }
    }
    return Error('input is not a positive integer');
  }

  /*
  * Generates a sequence of Fibonacci Series that includes a0 and a1, which are passed as parameters
  * @param {Number} a0 - Positive Integer that signifies the first number in the sequence
  * @param {Number} a1 - Positive Integer that signifies the second number in the sequence
  * @return {JSON} A JSON array that contains the list of the Fibonacci Series, invalid input error if a0 and a1 are not positive integers, Error is a0 >= a1, Error if a0 or a1 is larger than the largest number supported by Javascript
  */
  function getFibonacciSeries(a0, a1, numberRequired) {
    if (a0 >= 0 && a1 >= 1 && a1 > a0 && Number.isInteger(a0) && Number.isInteger(a1) && a0 < Number.MAX_SAFE_INTEGER && a1 < Number.MAX_SAFE_INTEGER) {
      var result = [];
      var temp;
      result.push(a0);
      result.push(a1);
      var a_n_1 = a0;
      var a_n = a1;
      while (result.length < numberRequired) {
        if ((temp = a_n_1 + a_n) < Number.MAX_SAFE_INTEGER) {
          result.push(temp);
          a_n_1 = a_n;
          a_n = temp;
        } else {
          return Error('result contains values larger than largest number supported by Javascript');
        }
      }
      return result;
    } else {
      return Error('invalid input');
    }
  }

  return {
    checkPrime: checkPrime,
    getFibonacciSeries: getFibonacciSeries
  }
};

module.exports = NumberHelper;
