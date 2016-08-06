# How to use the library
```
var nh = require('math-lib');
console.log(nh().checkPrime(7));
```
# Function listing
## checkPrime
Checks if the input number is a prime number or not
@param {Number} input - Postitive integer
@returns {Boolean} - true if input is a prime number, false if number is not a prime number, Error if input is not a positive integer, Error if input is larger than the largest integer supported by Javascript

```
var nh = require('math-lib');
console.log(nh().checkPrime(7)); // returns true
console.log(nh().checkPrime(25)); // returns true
console.log(nh().checkPrime(-25)); // returns Error
console.log(nh().checkPrime(25.7)); // returns Error
console.log(nh().checkPrime(25545464545686321354546987654631321354546866545454632312554313)); // returns Error
```

## getFibonacciSeries

Generates a sequence of Fibonacci Series that includes a0 and a1, which are passed as parameters
@param {Number} a0 - Positive Integer that signifies the first number in the sequence
@param {Number} a1 - Positive Integer that signifies the second number in the sequence
@return {JSON} A JSON array that contains the list of the Fibonacci Series, invalid input error if a0 and a1 are not positive integers, Error is a0 >= a1, Error if a0 or a1 is larger than the largest number supported by Javascript

```
var nh = require('math-lib');
console.log(nh().getFibonacciSeries(0, 1, 10)); // returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
```
## getFibonacciSeriesUpto

Generates a sequence of Fibonacci Series that includes a0 and a1, which are passed as parameters upto an upper limit that is specified as one of the parameters
@param {Number} a0 - Positive Integer that signifies the first number in the sequence
@param {Number} a1 - Positive Integer that signifies the second number in the sequence
@param {Number} upperLimit - Positive Integer that denotes the number up till the terms of the Fibonacci series are to be generated
@return {JSON} A JSON array that contains the list of the Fibonacci Series, invalid input error if a0 and a1 are not positive integers, Error is a0 >= a1, Error if a0 or a1 or upperLimit is larger than the largest number supported by Javascript
