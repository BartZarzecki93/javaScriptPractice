//check if the number is squared

var isSquare = function(n) {
  var sqrt = Math.sqrt(n);
  if (n < 0) {
    console.log(false);
    return false;
  } else if (Number.isInteger(sqrt)) {
    return true;
  } else {
    return false;
  }
};
isSquare(93);
