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
console.log(nh().checkPrime(25545464545686321354546987654631321354546866545454632312554313)); // returns Error
```

## getFibonacciSeries(a0, a1, numberRequired)
Generates an array of Fibonacci Series that includes a0 and a1, which are passed as parameters.

```
var nh = require('math-lib');
console.log(nh().getFibonacciSeries(0, 1, 10)); // returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
```
## getFibonacciSeriesUpto(a0, a1, upperLimit)
Generates an array of Fibonacci Series upto a user specified upper limit.

```
var nh = require('math-lib');
console.log(nh().getFibonacciSeriesUpto(0, 1, 10)); // returns [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]
```
