// For example, take 153 (3 digits):

//    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number.

// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

function narcissistic() {
  const value = 234;
  let myArr = [];
  var getPow = value
    .toString()
    .split("")
    .map(x => {
      myArr.push(x);
    });
  console.log(myArr.length);
  var getAccumValue = getPow.reduce(function(a, c) {
    return a + c;
  });

  // Passing result.
  return getAccumValue === value;
}
console.log(narcissistic());
