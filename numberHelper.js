function NumberHelper() {
  function checkDivisibility(dividend, divisor) {
    if(Number.isInteger(dividend) && Number.isInteger(divisor)) {
      if(Math.abs(dividend) % Math.abs(divisor) === 0) {
        return true;
      }
      return false;
    }
    return Error('inputs are not integers');
  }

  function checkPrime(input) {
    if(Number.isInteger(input) && input > 0) {
      var upperBound = Math.round(Math.sqrt(input));
      for (var i = 2; i < upperBound; i++) {
        if(input % i == 0) {
          return false;
        }
      }
      return true;
    }
    return Error('input is not a positive integer');
  }

  return {
    checkDivisibility: checkDivisibility,
    checkPrime: checkPrime
  }


};

module.exports = NumberHelper;
