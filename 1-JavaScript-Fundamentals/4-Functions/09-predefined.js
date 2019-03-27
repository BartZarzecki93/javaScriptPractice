function bankDepositAmount(money) {
    if (isNaN(money)) {
      return 'Not a Number!';
    }
    return money + " was deposited into your account.";
  }

  //Calling the function
  var depositOne = bankDepositAmount(1200);
  var depositTwo = bankDepositAmount("one hundred");

  //Printing the result
  console.log(depositOne); //1
  console.log(depositTwo); //2



  //converting string into number


  function convertStringToNumber(x) {
    var parsedNumber = parseInt(x);
    return parsedNumber;
}

var numberOne = convertStringToNumber("1");
var numberTwo = convertStringToNumber("2");

console.log(numberOne);
console.log(numberTwo);



function convertStringToNumber(x) {
    var parsedNumber = parseInt(x);
    if (isNaN(parsedNumber)) { 
    return "Sorry, that is not a number" 
    }
    return parsedNumber;
}

var numberOne = convertStringToNumber("1");
var numberTwo = convertStringToNumber("2");
var numberThree = convertStringToNumber("XYZ"); 

console.log(numberOne);
console.log(numberTwo);
console.log(numberThree); //What will happen here?


const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (let item of set1) {
  console.log(item);
  // expected output: 42
  // expected output: 13
}


// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, hypotenuse) {
    return Math.asin(opposite / hypotenuse);
  }
  
  console.log(calcAngle(6, 10));
  // expected output: 0.6435011087932844
  
  console.log(calcAngle(5, 3));
  // expected output: NaN