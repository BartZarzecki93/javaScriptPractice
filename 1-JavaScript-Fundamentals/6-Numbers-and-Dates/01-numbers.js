// Number objects

Number.MAX_VALUE // The largest representable number
Number.MIN_VALUE // The smallest representable number
Number.NaN // Special 'not a number' value
Number.NEGATIVE_INFINITY // Special negative infinite value; returned on overflow
Number.POSITIVE_INFINITY // Special positive infinite value; return on overflow
Number.EPSILON // Difference between one and the smallest value greater than one that can be represented as a Number
Number.MIN_SAFE_INTEGER // Minimum safe integer in JS
Number.MAX_SAFE_INTEGER // Maximum safe integer in JS

// Number methods

Number.parseFloat() // Parses a string argument and returns a floating point number 
Number.parseInt() // Parses a string argument and returns an integer of the specified radix or base
Number.isFinite() // Determines whether the passed value is a finite number
Number.isInteger() // Determines whether the passed value is an integer
Number.isNaN() // Determines whether the passed value is NaN
Number.isSafeInteger() // Determines whether the provided value is a number that is a safe integer

// Number prototypes

Number.prototype.toExponential() // Returns a string representing the number in exponential notation
Number.prototype.toFixed() // Returns a string representing the number in fixed-point notation
Number.prototype.toPrecision() //Returns a string representing the number to a specified precision in fixed-point notation