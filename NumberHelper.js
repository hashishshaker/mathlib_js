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
  * @param {Number} numberRequired - Positive Integer that denotes the number of terms of the Fibonacci series to be generated
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

  /*
  * Generates a sequence of Fibonacci Series that includes a0 and a1, which are passed as parameters upto an upper limit that is specified as one of the parameters
  * @param {Number} a0 - Positive Integer that signifies the first number in the sequence
  * @param {Number} a1 - Positive Integer that signifies the second number in the sequence
  * @param {Number} upperLimit - Positive Integer that denotes the number up till the terms of the Fibonacci series are to be generated
  * @return {JSON} A JSON array that contains the list of the Fibonacci Series, invalid input error if a0 and a1 are not positive integers, Error is a0 >= a1, Error if a0 or a1 or upperLimit is larger than the largest number supported by Javascript
  */
  function getFibonacciSeriesUpto(a0, a1, upperLimit) {
    if (a0 >= 0 && a1 >= 1 && a1 > a0 && Number.isInteger(a0) && Number.isInteger(a1) && a0 < Number.MAX_SAFE_INTEGER && a1 < Number.MAX_SAFE_INTEGER && upperLimit <= Number.MAX_SAFE_INTEGER) {
      var result = [];
      var temp;
      result.push(a0);
      result.push(a1);
      var a_n_1 = a0;
      var a_n = a1;
      while ((temp = a_n_1 + a_n) <= upperLimit) {
        result.push(temp);
        a_n_1 = a_n;
        a_n = temp;
      }
      return result;
    } else {
      return Error('invalid input');
    }
  }

  /*
  * Generates a list all prime numbers up to a given input. Implements Sieve of Eratosthenes.
  * @param {Number} input - Positive Integer greater than 1 up to which prime numbers are to be generated
  * @return {JSON} A JSON array that contains the list of the prime numbers less than or equal to the input
  */
  function listPrimeNumbersUpto(input) {
    if (!Number.isInteger(input) || input < 1) {
      return Error('input has to be a positive integer greater than 1');
    }

    var checkArray = [];
    var outputArray = [];

    for (var k = 0; k < input; k++) {
      checkArray.push(true);
    }
    var upperBound = Math.ceil(Math.sqrt(input));
    for (var i = 2; i < upperBound; i++) {
      if (checkArray[i - 1]) {
        for (var j = i * i; j <= input; j += i) {
          checkArray[j - 1] = false;
        }
      }
    }

    for (var l = 1; l < checkArray.length; l++) {
      if(checkArray[l]) {
        outputArray.push(l + 1);
      }
    }
    return outputArray;
  }

  /*
  * Generates a list all prime factors of a given input.
  * @param {Number} input - Positive Integer greater than 1 for which prime factors are to be generated.
  * @return {JSON} A JSON array that contains the list of the prime factors of the input
  */
  function getPrimeFactors(input) {
    var result = [];
    if(input > Number.MAX_SAFE_INTEGER || !Number.isInteger(input) || input < 2) {
      return Error('invalid input');
    }
    var primeNumberListUptoInput = listPrimeNumbersUpto(Math.ceil(Math.sqrt(input)));
    primeNumberListUptoInput.forEach(function(value) {
      if(input % value === 0) {
        result.push(value);
      }
    });
    return result;
  }

  /*
  * Computes the slope of a function foo at x
  * @param {Function} foo - Function for which the slope is to be computed
  * @param {Number} x - The value at which the slope is to be computed
  * @return {Number} The value of slope of fucntion at x of function foo
  */
  function computeSlope(foo, x) {
    var epsilon = Math.pow(10, -14);
    var delta = Math.pow(10, -7);
    var numberIterations = 1000;
    var numberAttemmpts = 0
    var newDelta = delta + epsilon;

    while (((foo(x + delta) - foo(x - delta)) / (2 * delta) - (foo(x + newDelta) - foo(x - newDelta)) / (2 * newDelta)) > epsilon &&  numberAttemmpts < numberIterations) {
      delta = newDelta;
      newDelta = delta + epsilon;
    }
    return (foo(x + delta) - foo(x - delta)) / (2 * delta);
  }


  return {
    checkPrime: checkPrime,
    getFibonacciSeries: getFibonacciSeries,
    getFibonacciSeriesUpto: getFibonacciSeriesUpto,
    listPrimeNumbersUpto: listPrimeNumbersUpto,
    getPrimeFactors: getPrimeFactors,
    computeSlope: computeSlope
  }
};

module.exports = NumberHelper;
