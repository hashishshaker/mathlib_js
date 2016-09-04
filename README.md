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

## computeSlope(foo, x)
Computes the first derivative (slope) of a function foo at x. Central
difference method is used to compute the first derivative. Methodology
used to compute the first derivative and the choice of step size is
detailed here: https://en.wikipedia.org/wiki/Numerical_differentiation
User has to ensure that the function foo is differentiable at x.
```
var nh = require('math-lib');
console.log(nh().computeSlope(function(x) {
  return x * x;
}, 2)); //returns 4.00000000
```
```
var foo2 = function(x) {
  return Math.sin(x);
};
console.log(nh().computeSlope(foo2, Math.PI)); // returns -0.99999999
```

## computeSlope(foo, x)
Computes the second derivative of a function foo at x. Central difference
method is used to compute the second derivative. Methodology used to compute
the second derivative and the choice of step size is detailed here:
https://en.wikipedia.org/wiki/Second_derivative
User has to ensure that the function foo is differentiable twice at x.
```
console.log('foo1', nh().computeSecondDerivative(function(x) {
  return x * x;
}, 2)); // returns 1.999999
```

## newtonRaphson(foo, x, numIterations)
Computes the nearest root of function foo using Newton Raphson method.
The root finding algorithm begins the search at x and iterates for the root
for the number of times as specified by the second parameter - numIterations.
```
var foo1 = function(x) {
  return x * x - 5 * x + 6;
};

function newtonRaphsonTest() {
  console.log(nh().newtonRaphson(foo1, -100, 100));
} // returns 2

function newtonRaphsonTest() {
  console.log(nh().newtonRaphson(foo1, -100, 100));
} // returns 2.999999
```
