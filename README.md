# How to use the library
```
var nh = require('math-lib');
console.log(nh().checkPrime(7));
```
# Function listing
## checkPrime(input)
Checks if the input number is a prime number or not. Input number should be a positive integer.

```
var nh = require('math-lib');
console.log(nh().checkPrime(7)); // returns true
console.log(nh().checkPrime(25)); // returns true
console.log(nh().checkPrime(-25)); // returns Error
console.log(nh().checkPrime(25.7)); // returns Error
```

## getFibonacciSeries(a0, a1, numberRequired)
Generates an array of Fibonacci Series that includes a0 and a1, which are passed as parameters.

```
var nh = require('math-lib');
console.log(nh().getFibonacciSeries(0, 1, 10)); // returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ];
```
## getFibonacciSeriesUpto(a0, a1, upperLimit)
Generates an array of Fibonacci Series upto a user specified upper limit.

```
var nh = require('math-lib');
console.log(nh().getFibonacciSeriesUpto(0, 1, 10)); // returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ];
```
## listPrimeNumbersUpto(input)
Generates a list all prime numbers up to a given input. Implements Sieve of Eratosthenes.

```
var nh = require('math-lib');
console.log(nh().listPrimeNumbersUpto(10)); // returns [ 2, 3, 5, 7 ]
```
## getPrimeFactors(input)
Generates a list all prime factors of a given input.
```
var nh = require('math-lib');
console.log(nh().getPrimeFactors(600851475143)); // returns [ 71, 839, 1471, 6857 ]
```
